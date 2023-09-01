import "../components/NavApp"
import "../components/JumboSearch";
import '../components/MovieList';
import SourceApi from '../data/SourceApi';

const main = () => {
    const searchElement = document.querySelector("jumbo-search");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = async () => {
        try {
            const results = await SourceApi.searchMovie(searchElement.value);
            movieListElement.className = "wrap-list";
            movieListElement.movies = results;
        } catch (message) {
            console.log('Error ' + message)
        }
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;