const titleEl = document.getElementById('page-title');
const descEl = document.getElementById('page-description');
const bodyEl = document.body;

function setTitle(newTitle) {
  titleEl.textContent = newTitle || '';
}

function setDescription(newDescription) {
  descEl.textContent = newDescription || '';
}

function setBackgroundColor(color) {
  bodyEl.style.backgroundColor = color || '';
}

function setFontColor(color) {
  document.querySelectorAll('*').forEach(el => {
    el.style.color = color || '';
  });
}

function setTheme(theme) {
  if (theme === 'dark') {
    bodyEl.classList.remove('light');
    bodyEl.classList.add('dark');
  } else if (theme === 'light') {
    bodyEl.classList.remove('dark');
    bodyEl.classList.add('light');
  }
}
