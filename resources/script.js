const body = document.querySelector('body');

function setLightMode() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
}

function setDarkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
}
