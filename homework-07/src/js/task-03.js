const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function createGallery(arr) {
  const ulElement = document.querySelector('#gallery');
  ulElement.classList.add('image-list');
  
  const markUpString = arr.reduce(
    (string, item) => string + `<li><img class="image" src="${item.url} alt="${item.alt}" width="300" height="200"></li>`,
    ""
  );
  
  ulElement.insertAdjacentHTML('afterbegin', markUpString);
  console.log(ulElement);
}

createGallery(images);