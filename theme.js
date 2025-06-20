const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
  themeLabel.textContent = "🌞 Switch to Light Mode";
} else {
  themeLabel.textContent = "🌙 Switch to Dark Mode";
}

// Toggle theme and update storage
themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    themeLabel.textContent = "🌞 Switch to Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    themeLabel.textContent = "🌙 Switch to Dark Mode";
    localStorage.setItem("theme", "light");
  }
});