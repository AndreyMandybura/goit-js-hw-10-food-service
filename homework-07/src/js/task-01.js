const ulElement = document.querySelectorAll('.item');
console.log(`В списке ${ulElement.length} категории.`);

const titles = [];
ulElement.forEach(elem => {
  console.log('Категория: ', elem.getElementsByTagName('h2')[0].textContent);
  console.log('Количество эелментов: ', elem.getElementsByTagName('li').length);
});
