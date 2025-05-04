document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-mode");
    const body = document.body;
  
    // Load mode from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
    }
  
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });