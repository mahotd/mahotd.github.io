try {
  const input = document.querySelector(`.theme [value="${localStorage.getItem("theme")}"]`);
  if (input) input.checked = true;
  document
    .querySelector(".theme")
    .addEventListener("change", (e) => localStorage.setItem("theme", e.target.value));
} catch {}
