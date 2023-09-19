import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
console.log(galleryList);
function createGalleryItem({ preview, original, description }) {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }
  
 
  galleryList.innerHTML = galleryItems.map(createGalleryItem).join('');
  
  galleryList.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (event.target.nodeName !== 'IMG') {
      return;
    }
  
    const imageSrc = event.target.dataset.source;
    const imageAlt = event.target.alt;
  
    const instance = basicLightbox.create(`
      <img src="${imageSrc}" alt="${imageAlt}">
    `);
  
    instance.show();
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', handleEscKey);
      }
    };
  
    instance.element().addEventListener('click', (e) => {
      if (e.target.nodeName !== 'IMG') {
        instance.close();
      }
    });
  
    document.addEventListener('keydown', handleEscKey);
  });
 

 
  


