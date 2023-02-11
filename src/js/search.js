import FetchInfo from './fetch';
import handleGalleryCreation from './img-templates';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const newFetchInfo = new FetchInfo();

const btn = document.querySelector('.button');
const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.button--accent');
loadMoreBtn.style.display = 'none';

form.addEventListener('submit', handlePhotoSearch);
loadMoreBtn.addEventListener('click', handleMorePhotos);

function handlePhotoSearch(e) {
  e.preventDefault();

  newFetchInfo.query = input.value;
  newFetchInfo.resetSearch();

  newFetchInfo
    .fetchInfo()
    .then(res => {
      if (res.hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      Notify.info(`Hooray! We found ${res.totalHits} images.`);
      loadMoreBtn.style.display = 'flex';
      gallery.innerHTML = handleGalleryCreation(res);
    })
    .catch(er => console.log(er));
}

// function handleMorePhotos(e) {
//   newFetchInfo.fetchInfo().then(res => {
//     gallery.insertAdjacentHTML('beforeend', handleGalleryCreation(res));
//   });
// }

// gallery.addEventListener('click', handlePhotoOriginal);

// function handlePhotoOriginal(e) {
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   var gallery = $('.gallery a').simpleLightbox();
//   gallery.show();

//   gallery.next();

//   e.preventDefault();
//   document.addEventListener('keydown', closeModalOnEscape);

//   function closeModalOnEscape(e) {
//     if (e.key === 'Escape') {
//       gallery.close();
//       document.removeEventListener('keydown', closeModalOnEscape);
//     }
//   }
// }
