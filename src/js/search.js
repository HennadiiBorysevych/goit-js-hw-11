import fetchInfo from './fetch';
import handleGalleryCreation from './img-templates';
const btn = document.querySelector('.button');
const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', handlePhotoSearch);

function handlePhotoSearch(e) {
  e.preventDefault();
  fetchInfo(input.value)
    .then(res => {
      gallery.innerHTML = handleGalleryCreation(res);
    })
    .catch(er => console.log(er));
}
