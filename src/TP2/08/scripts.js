const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", (e) => {
  const isDark = e.target.checked;

  if (isDark) {
    document.body.setAttribute("data-theme", "dark-mode");
  } else {
    document.body.removeAttribute("data-theme");
  }
});

if (darkMode.checked) {
  document.body.setAttribute("data-theme", "dark-mode");
} else {
  document.body.removeAttribute("data-theme");
}
