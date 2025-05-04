const darkModeSwitch = document.getElementById('darkModeSwitch');

    // Set initial state on load
    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark-mode');
      darkModeSwitch.checked = true;
    }

    // Toggle dark mode and save preference
    darkModeSwitch.addEventListener('change', (e) => {
      const isDark = e.target.checked;
      document.documentElement.classList.toggle('dark-mode', isDark);
      localStorage.setItem('darkMode', isDark);
    });