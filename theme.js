const theme = document.querySelector(".theme");

const save = (value) => {
  try {
    localStorage.setItem("theme", value);
  } catch {}
};

try {
  const input = theme.querySelector(`[value="${localStorage.getItem("theme")}"]`);
  if (input) input.checked = true;
} catch {}

const cell = 3;
const frameCount = 12;
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

const ditherFrames = (originX, originY) => {
  const width = Math.ceil(innerWidth / cell);
  const height = Math.ceil(innerHeight / cell);
  const ox = originX / cell;
  const oy = originY / cell;
  const maxDistance = Math.hypot(Math.max(ox, width - ox), Math.max(oy, height - oy));
  const thresholds = new Float32Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const distance = Math.hypot(x - ox, y - oy) / maxDistance + (Math.random() - 0.5) * 0.1;
      const dither = (bayer[(y % 4) * 4 + (x % 4)] + 0.5) / 16;
      thresholds[y * width + x] = distance * 0.7 + dither * 0.3;
    }
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const image = context.createImageData(width, height);
  const frames = [];
  for (let frame = 0; frame < frameCount; frame++) {
    thresholds.forEach((threshold, i) => {
      if (threshold < frame / frameCount) image.data[i * 4 + 3] = 255;
    });
    context.putImageData(image, 0, 0);
    frames.push(`url(${canvas.toDataURL()})`);
  }
  frames.push("none");
  return frames;
};

theme.addEventListener("change", (e) => save(e.target.value));

theme.addEventListener("click", (e) => {
  const input = e.target;
  if (
    !(input instanceof HTMLInputElement) ||
    !document.startViewTransition ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  e.preventDefault();
  const label = input.closest("label").getBoundingClientRect();
  const frames = ditherFrames(label.x + label.width / 2, label.y + label.height / 2);
  const transition = document.startViewTransition(() => {
    input.checked = true;
    save(input.value);
  });
  transition.ready.then(() =>
    document.documentElement.animate(
      { maskImage: frames },
      { duration: 400, pseudoElement: "::view-transition-new(root)" },
    ),
  );
});
