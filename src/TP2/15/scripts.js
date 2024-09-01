const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", (e) => {
  const isDark = e.target.classList.contains("dark");

  if (!isDark) {
    e.target.innerText = "light_mode";
    e.target.classList.add("dark");
    document.body.setAttribute("data-theme", "dark-mode");
  } else {
    e.target.innerText = "dark_mode";
    e.target.classList.remove("dark");
    document.body.removeAttribute("data-theme");
  }
});

if (darkModeBtn.classList.contains("dark")) {
  darkModeBtn.innerText = "light_mode";
  document.body.setAttribute("data-theme", "dark-mode");
} else {
  darkModeBtn.innerText = "dark_mode";
  document.body.removeAttribute("data-theme");
}
