class MovieItem extends HTMLElement {
    constructor() {
      super();
    }
  
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    get id() {
      return this._movie.id;
    }
  
    render() {
      this.innerHTML = `
        <div class="card text-bg-dark mb-3" style="width: 18rem;">
            <img class="card-img-top" src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" alt="Poster">
            <div class="card-body border-dark mb-3">
                <h3 class="card-title">${this._movie.title}</h3>
                <p class="card-text">Release Date : ${this._movie.release_date}</p>
                <p class="card-text">${this._movie.overview.charAt(1000) ? this._movie.overview.substring(0, 1000) : this._movie.overview}</p>
                <a href="#" class="btn btn-primary">Rating : ${this._movie.vote_average}</a>
            </div>
        </div>
    `;
    }
  }
  
  customElements.define("movie-item", MovieItem);
  