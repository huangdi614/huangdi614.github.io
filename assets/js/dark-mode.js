// Dark mode toggle functionality
(function() {
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle-checkbox');

  // Apply the saved theme on page load
  htmlElement.setAttribute('data-theme', currentTheme);
  if (themeToggle) {
    themeToggle.checked = currentTheme === 'dark';
  }

  // Function to toggle theme
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Add event listener to the toggle
  if (themeToggle) {
    themeToggle.addEventListener('change', toggleTheme);
  }

  // Check if user prefers dark mode (system preference)
  // Only apply if no saved preference exists
  if (!localStorage.getItem('theme')) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      htmlElement.setAttribute('data-theme', 'dark');
      if (themeToggle) {
        themeToggle.checked = true;
      }
    }
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply system preference if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', newTheme);
      if (themeToggle) {
        themeToggle.checked = newTheme === 'dark';
      }
    }
  });
})();