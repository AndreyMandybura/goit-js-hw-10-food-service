const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const btn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const defaultTheme = function () {
    if (localStorage.getItem('Theme') === Theme.DARK) {
        setDarkTheme();
        btn.setAttribute('checked', true);
    }
};

defaultTheme();

btn.addEventListener('change', (e) => {
     setDarkTheme ()
    if (!e.target.checked) { setLightTheme() }
});

function setDarkTheme () {
    body.classList.add(Theme.DARK) || body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
};

 function setLightTheme () {
    body.classList.remove(Theme.DARK) || body.classList.add(Theme.LIGHT);
     localStorage.setItem('Theme', Theme.LIGHT);
};