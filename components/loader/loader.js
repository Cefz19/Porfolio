import { SharedResources } from "../shared/SharedResources.js";

class LoaderComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
    <!-- LOADER -->
    <div class="lds-ripple loader" id="loader">
        <div><div></div></div>
        <div><div></div></div>
        
    </div>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/loader/homeloaderStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      '/assets/animations/animation.css',
      '/components/loader/loaderStyle.css');

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();

    setTimeout(() => {
      const loader = this.shadowRoot.querySelector('.loader');
      if(loader) {
        loader.classList.add('fade-out');

        //Espera a que termine la animacion antes de eliminarse
        setTimeout(() => {
          this.remove();
          this.dispatchEvent(new CustomEvent('loader-finished', { bubbles: true }))
        }, 1000);
      }
    }, 2000);
  }
 
}


customElements.define("loader-component", LoaderComponent);
