const themeToggle = document.getElementById('theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? '#333' : '#f5f5f5';
  document.body.style.color = darkMode ? '#f5f5f5' : '#333';
  themeToggle.textContent = darkMode ? 'Tema Claro' : 'Mudar Tema';
});
