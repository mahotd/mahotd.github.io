const form = document.querySelector(".dither");
const canvas = form.querySelector("canvas");
const context = canvas.getContext("2d", { willReadFrequently: true });
const status = form.querySelector(".status");
const webcam = form.querySelector("#webcam");
const video = document.createElement("video");
video.muted = true;
video.playsInline = true;

const dark = [0x14, 0x16, 0x1e];
const light = [0xf9, 0xf9, 0xf1];
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

const diffuse = (values, width, height, kernel) => {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const value = values[i] > 0.5 ? 1 : 0;
      const error = values[i] - value;
      values[i] = value;
      for (const [dx, dy, weight] of kernel) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny < height) values[ny * width + nx] += error * weight;
      }
    }
  }
};

const algorithms = {
  bayer: (values, width) => {
    values.forEach((value, i) => {
      const threshold = (bayer[(Math.floor(i / width) % 4) * 4 + ((i % width) % 4)] + 0.5) / 16;
      values[i] = value > threshold ? 1 : 0;
    });
  },
  "floyd-steinberg": (values, width, height) =>
    diffuse(values, width, height, [
      [1, 0, 7 / 16],
      [-1, 1, 3 / 16],
      [0, 1, 5 / 16],
      [1, 1, 1 / 16],
    ]),
  atkinson: (values, width, height) =>
    diffuse(values, width, height, [
      [1, 0, 1 / 8],
      [2, 0, 1 / 8],
      [-1, 1, 1 / 8],
      [0, 1, 1 / 8],
      [1, 1, 1 / 8],
      [0, 2, 1 / 8],
    ]),
};

const testPattern = () => {
  const pattern = document.createElement("canvas");
  pattern.width = 600;
  pattern.height = 300;
  const patternContext = pattern.getContext("2d");
  const gradient = patternContext.createLinearGradient(0, 0, 600, 0);
  gradient.addColorStop(0, "#000");
  gradient.addColorStop(1, "#fff");
  patternContext.fillStyle = gradient;
  patternContext.fillRect(0, 0, 600, 300);
  const glow = patternContext.createRadialGradient(150, 150, 0, 150, 150, 140);
  glow.addColorStop(0, "#fff");
  glow.addColorStop(1, "#fff0");
  patternContext.fillStyle = glow;
  patternContext.fillRect(0, 0, 600, 300);
  return pattern;
};

let source = testPattern();
let mirror = false;
let stream = null;

const render = () => {
  const sourceWidth = source.videoWidth ?? source.width;
  const sourceHeight = source.videoHeight ?? source.height;
  if (!sourceWidth || !sourceHeight) return;
  const width = Math.max(1, Math.round(form.clientWidth / form.elements.pixel.value));
  const height = Math.max(1, Math.round((width * sourceHeight) / sourceWidth));
  canvas.width = width;
  canvas.height = height;
  if (mirror) {
    context.translate(width, 0);
    context.scale(-1, 1);
  }
  context.drawImage(source, 0, 0, width, height);
  const image = context.getImageData(0, 0, width, height);
  const { data } = image;
  const bias = 0.5 - form.elements.threshold.value;
  const values = new Float32Array(width * height);
  for (let i = 0; i < values.length; i++) {
    values[i] = (data[i * 4] * 0.299 + data[i * 4 + 1] * 0.587 + data[i * 4 + 2] * 0.114) / 255;
    values[i] += bias;
  }
  algorithms[form.elements.algorithm.value](values, width, height);
  values.forEach((value, i) => {
    data.set(value ? light : dark, i * 4);
    data[i * 4 + 3] = 255;
  });
  context.putImageData(image, 0, 0);
};

const loop = () => {
  if (!stream) return;
  render();
  requestAnimationFrame(loop);
};

const stopWebcam = () => {
  const frame = document.createElement("canvas");
  frame.width = video.videoWidth;
  frame.height = video.videoHeight;
  frame.getContext("2d").drawImage(video, 0, 0);
  source = frame;
  stream.getTracks().forEach((track) => track.stop());
  stream = null;
  webcam.textContent = "webcam";
  render();
};

const load = async (file) => {
  if (!file?.type.startsWith("image/")) return;
  if (stream) stopWebcam();
  try {
    source = await createImageBitmap(file);
    mirror = false;
    status.textContent = "";
    render();
  } catch {
    status.textContent = `cannot read ${file.name}`;
  }
};

webcam.addEventListener("click", async () => {
  if (stream) return stopWebcam();
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
  } catch (error) {
    status.textContent = `webcam not available: ${error.message}`;
    return;
  }
  video.srcObject = stream;
  await video.play();
  source = video;
  mirror = true;
  status.textContent = "";
  webcam.textContent = "stop webcam";
  loop();
});

form.querySelector("#save").addEventListener("click", () => {
  const { algorithm, pixel, threshold } = form.elements;
  const image = document.createElement("canvas");
  image.width = canvas.width * pixel.value;
  image.height = canvas.height * pixel.value;
  const imageContext = image.getContext("2d");
  imageContext.imageSmoothingEnabled = false;
  imageContext.drawImage(canvas, 0, 0, image.width, image.height);
  const link = document.createElement("a");
  link.href = image.toDataURL();
  link.download = `dither-${algorithm.value}-pixel${pixel.value}-threshold${threshold.value}.png`;
  link.click();
});

form.addEventListener("input", () => stream || render());
form.querySelector('[type="file"]').addEventListener("change", (e) => load(e.target.files[0]));
form.addEventListener("submit", (e) => e.preventDefault());
document.addEventListener("dragover", (e) => e.preventDefault());
document.addEventListener("drop", (e) => {
  e.preventDefault();
  load(e.dataTransfer.files[0]);
});
addEventListener("resize", () => stream || render());

render();
