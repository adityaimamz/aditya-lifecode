class NavApp extends HTMLElement {
    constructor() {
        super();
      }
    connectedCallback(){
        this.render(); 
    }

      
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
      }
    
      get value() {
        return this.querySelector("#searchElement").value;
      }

    render(){
        this.innerHTML = `
        <style>
        
            nav h2{
            font-family:'Nabla' !important;
            }        
        </style>
        <nav class="navbar navbar-dark bg-dark text-white">
            <div class="container-fluid">
                <h2 class="center">MOVIE SEARCH BY IZADITYA</h2>
            </div>
        </nav>`;
    }
}

customElements.define('nav-app', NavApp);