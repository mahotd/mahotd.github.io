const konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const history = [];
let historyIndex = 0;
let konamiProgress = 0;
let dialog, output, input;

const paths = {
  "work/": "/about/#work",
  "education/": "/about/#education",
  "socials/": "/about/#socials",
  "resume.pdf": "/resume.pdf",
};

const link = (text, href) => ({ text, href });

const print = (...parts) => {
  const line = document.createElement("div");
  for (const part of parts) {
    if (typeof part === "string") {
      line.append(part);
    } else {
      const a = document.createElement("a");
      a.href = part.href;
      a.textContent = part.text;
      line.append(a);
    }
  }
  output.append(line);
};

const commands = {
  help: () => print(`commands: ${Object.keys(commands).join(" ")}`),
  whoami: () =>
    print("mahot descelliers, software engineer at ", link("harmattan ai", "https://harmattan.ai/")),
  ls: () => print(...Object.keys(paths).flatMap((path) => ["  ", link(path, paths[path])]).slice(1)),
  cd: (path = "~") => go(path),
  open: (path) => go(path),
  resume: () => print(link("resume.pdf", "/resume.pdf")),
  socials: () =>
    print(
      link("github", "https://github.com/mahotd"),
      "  ",
      link("linkedin", "https://www.linkedin.com/in/mahotd/"),
    ),
  theme: (value) => {
    if (value !== "dark" && value !== "light") return print("usage: theme dark|light");
    const radio = document.querySelector(`.theme [value="${value}"]`);
    if (!radio.checked) radio.click();
  },
  clear: () => output.replaceChildren(),
  exit: () => dialog.close(),
};

const go = (path) => {
  if (path === undefined) return print("usage: cd|open <path>");
  const key = Object.hasOwn(paths, path) ? path : `${path}/`;
  const href = ["~", "..", "/"].includes(path) ? "/" : Object.hasOwn(paths, key) && paths[key];
  if (!href) return print(`no such file or directory: ${path}`);
  dialog.close();
  location.href = href;
};

const run = (text) => {
  print(`$ ${text}`);
  const [name, ...args] = text.trim().split(/\s+/);
  if (!name) return;
  history.push(text);
  if (name === "sudo" || (name === "rm" && args.includes("-rf"))) print("nice try.");
  else if (Object.hasOwn(commands, name)) commands[name](...args);
  else print(`command not found: ${name}. try help`);
};

const open = () => {
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.className = "terminal";
    dialog.setAttribute("closedby", "any");
    dialog.innerHTML = `<div class="output"></div><label>$<input autofocus autocomplete="off" spellcheck="false" aria-label="command" /></label>`;
    output = dialog.querySelector(".output");
    input = dialog.querySelector("input");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        run(input.value);
        input.value = "";
        historyIndex = history.length;
        output.scrollTop = output.scrollHeight;
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        historyIndex += e.key === "ArrowUp" ? -1 : 1;
        historyIndex = Math.max(0, Math.min(history.length, historyIndex));
        input.value = history[historyIndex] ?? "";
      }
    });
    document.body.append(dialog);
    print("type help to list the commands.");
  }
  dialog.showModal();
};

document.addEventListener("keydown", (e) => {
  if (dialog?.open || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.closest("input:not([type=radio]), textarea, select")) return;
  konamiProgress =
    e.key === konami[konamiProgress] ? konamiProgress + 1 : e.key === konami[0] ? 1 : 0;
  if (e.key === "/" || konamiProgress === konami.length) {
    e.preventDefault();
    konamiProgress = 0;
    open();
  }
});

console.log("psst: press /");
