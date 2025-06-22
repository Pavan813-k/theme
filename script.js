const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update icon
  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});