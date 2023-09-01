class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
      <nav class="navbar bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/src/style/img/pngegg.png" alt="Logo" width="100px" height="71px" class="d-inline-block align-text-top">
        </a>
        <form class="d-flex marvel-search ">
          <input class="form-control input-marvel me-2" type="search" placeholder="Search characters" aria-label="Search" />
          <button class="btn btn-danger marvel-search" style="background-color:  #ED1D24;" type="button">Search</button>
        </form>
      </div>
    </nav>
        `;
    }
  }
  
  customElements.define('app-bar', AppBar);