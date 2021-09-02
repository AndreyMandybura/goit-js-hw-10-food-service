const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredients = ingredients.map(elem => {
  const ulIngredients = document.createElement('li');
  ulIngredients.textContent = elem;
  return ulIngredients;
});

const listIngredients = document.querySelector('#ingredients');

listIngredients.append(...ulIngredients);

console.log(listIngredients);

