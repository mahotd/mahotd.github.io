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
const maxPixels = 16_000_000;
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

const ditherSprite = (originX, originY) => {
  const size = Math.max(
    cell,
    Math.ceil(Math.sqrt((innerWidth * innerHeight * (frameCount + 1)) / maxPixels)),
  );
  const width = Math.ceil(innerWidth / size);
  const height = Math.ceil(innerHeight / size);
  const ox = originX / size;
  const oy = originY / size;
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
  canvas.height = height * (frameCount + 1);
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const image = context.createImageData(canvas.width, canvas.height);
  const { data } = image;
  thresholds.forEach((threshold, i) => {
    const first = Math.min(frameCount, Math.max(0, Math.floor(threshold * frameCount) + 1));
    for (let frame = first; frame <= frameCount; frame++) {
      data[(frame * width * height + i) * 4 + 3] = 255;
    }
  });
  context.putImageData(image, 0, 0);
  return `url(${canvas.toDataURL()})`;
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
  const sprite = ditherSprite(label.x + label.width / 2, label.y + label.height / 2);
  const transition = document.startViewTransition(() => {
    input.checked = true;
    save(input.value);
  });
  transition.ready.then(() =>
    document.documentElement.animate(
      {
        maskImage: [sprite, sprite],
        maskSize: [`100% ${(frameCount + 1) * 100}%`, `100% ${(frameCount + 1) * 100}%`],
        maskPosition: ["0 0%", "0 100%"],
      },
      {
        duration: 400,
        easing: `steps(${frameCount + 1}, jump-none)`,
        pseudoElement: "::view-transition-new(root)",
      },
    ),
  );
});
