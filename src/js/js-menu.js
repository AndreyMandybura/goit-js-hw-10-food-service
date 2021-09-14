import menuTemplate from '../templates/menu-markup.hbs';
import menuList from '../menu.json'

const menuMarkup = menuTemplate(menuList);
const menuDirectoryInsert = document.querySelector('.js-menu');

menuDirectoryInsert.insertAdjacentHTML('beforeend', menuMarkup)