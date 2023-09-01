import './MovieItem';

class MovieList extends HTMLElement {

    constructor() {
        super();
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }
 }

 customElements.define("movie-list", MovieList);