export default class FetchInfo {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchInfo() {
    const API =
      'https://pixabay.com/api/?key=33559977-5d8a81e40738ffd9c726fd9c1';

    const response = await fetch(
      `${API}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    );

    const data = await response.json();
    this.page += 1;
    return data;
  }
  resetSearch() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
