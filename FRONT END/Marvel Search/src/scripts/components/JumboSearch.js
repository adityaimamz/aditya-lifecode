class JumboSearch extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
    get value() {
      return this.querySelector("#searchElement").value;
    }
  
    render() {
      this.innerHTML = `
            
        <style>.jumbotron {
          width: 100%;
          height: 550px;
          background-image: linear-gradient(rgba(135,88,255, 0.8),rgba(135,88,255, 0.8)), url(src/styles/images/bg.jpg);
          background-size: cover;
          background-position: center;
          color: black;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius:0;
        }
        
        
        
        .jumbotron * {
          transition: ease;
        }
        
        .jumbotron h1,
        .movie-form
        {
          font-family: "Josefin Sans", cursive;
          font-size: 40px;
          animation: jumbotron h1 10s ease infinite alternate;
        }
        
        .movie-form {
          width: 100%;
          max-width: 700px;
          background-color: rgba(255,255,255, 0.2);
          display: flex;
          align-items: center;
          border-radius: 60px;
          padding: 10px 20px;
          backdrop-filter: blur(4px) saturate(180%);
        }
        
        .movie-form input {
          background: transparent;
          flex: 1;
          border: 0;
          outline: none;
          padding: 24px;
          font-size: 20px;
          color: #F2F2F2;
        }
        
        .movie-form button img {
          width: 25px;
        }
        
        .movie-form button {
          border: 0;
          border-radius: 50%;
          width: 61px;
          height: 61px;
          background: #8758FF;
          cursor: pointer;
        }
        
        ::placeholder {
          color: #cac7ff;
        }</style>    


      <div class="jumbotron">
      <h1>Search Your favourite Movie here</h1>
      <p style="z-index: 1"></p>
      <form class="d-flex movie-form">
        <input class="input-movie" type="text"  id="searchElement" placeholder="Search Movie" aria-label="Search" />
        <button id="searchButtonElement" class="movie-search" type="button"><img src="src/styles/images/search.png"></button>
      </form>
    </div>`;
  
      this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
  }
  
  customElements.define("jumbo-search", JumboSearch);
  