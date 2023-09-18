import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryItemsHTML = galleryItems.map((item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`).join('');

galleryList.innerHTML = galleryItemsHTML;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
  galleryList.addEventListener('click', (event) => {
    event.preventDefault(); // Відміна дії переходу за посиланням
    lightbox.open(event.target.closest('a'));
  });





