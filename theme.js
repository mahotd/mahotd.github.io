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

const cell = 2;
const fps = 50;
const duration = 400;
const frames = Math.max(2, Math.round((fps * duration) / 1000));
const maxPixels = 16_000_000;
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

const ditherCanvas = (originX, originY) => {
  const size = Math.max(
    cell,
    Math.ceil(Math.sqrt((innerWidth * innerHeight * frames) / maxPixels)),
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
  canvas.height = height * frames;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const image = context.createImageData(canvas.width, canvas.height);
  const { data } = image;
  thresholds.forEach((threshold, i) => {
    const first = Math.min(frames - 1, Math.max(0, Math.floor(threshold * (frames - 1)) + 1));
    for (let frame = first; frame < frames; frame++) {
      data[(frame * width * height + i) * 4 + 3] = 255;
    }
  });
  context.putImageData(image, 0, 0);
  return canvas;
};

const origin = () => {
  const rect = theme.getBoundingClientRect();
  return [rect.x + rect.width / 2, rect.y + rect.height / 2];
};

let sprite = null;
let spriteImage = null;
let version = 0;

const prepare = () => {
  const current = ++version;
  ditherCanvas(...origin()).toBlob((blob) => {
    if (current !== version) return;
    if (spriteImage) URL.revokeObjectURL(spriteImage.src);
    spriteImage = new Image();
    spriteImage.src = URL.createObjectURL(blob);
    sprite = `url(${spriteImage.src})`;
  });
};

const schedule = () => (window.requestIdleCallback ?? setTimeout)(prepare);

let resizeTimer;
addEventListener("resize", () => {
  sprite = null;
  version++;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(schedule, 200);
});
schedule();

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
  const mask = sprite ?? `url(${ditherCanvas(...origin()).toDataURL()})`;
  const transition = document.startViewTransition(() => {
    input.checked = true;
    save(input.value);
  });
  transition.ready.then(() =>
    document.documentElement.animate(
      {
        maskImage: [mask, mask],
        maskSize: [`100% ${frames * 100}%`, `100% ${frames * 100}%`],
        maskPosition: ["0 0%", "0 100%"],
      },
      {
        duration,
        easing: `steps(${frames}, jump-none)`,
        pseudoElement: "::view-transition-new(root)",
      },
    ),
  );
});
