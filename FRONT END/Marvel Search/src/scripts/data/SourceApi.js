class SourceApi {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f00c1f91b57c8bb662aadb595bdb5c6&language=en-US&query=${keyword}`)
        .then(response => response.json())
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
            .catch(() => Promise.reject(`Check your internet connection`));
    }
}

export default SourceApi;