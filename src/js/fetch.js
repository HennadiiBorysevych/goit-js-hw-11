const API = 'https://pixabay.com/api/?key=33559977-5d8a81e40738ffd9c726fd9c1';
// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.

// https://pixabay.com/api/?key=33559977-5d8a81e40738ffd9c726fd9c1&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true
export default async function fetchInfo(searchName) {
  const response = await fetch(
    `${API}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const photos = await response.json();
  return photos;
}
