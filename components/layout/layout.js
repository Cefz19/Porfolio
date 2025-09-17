import { SharedResources } from "../shared/SharedResources.js";
import '../loader/loader.js';
import '../header/navbart.js';
import '../home/homeComponent.js';
import '../about/aboutme.js';
import '../service/services.js';
import '../skill/skills.js';
import '../contact/contactme.js';


class LayoutComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
    <div class="layout">
        <header>
        <loader-component></loader-component>
          <navbart-component></navbart-component>
        </header>
        <main>
          <home-component></home-component>
          <aboutme-component></aboutme-component>
          <services-component></services-component>
          <skills-component></skills-component>
        </main>
        <footer>
          <contactme-component></contactme-component>
        </footer>
    </div>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/layout/layoutStyle.css");
    return response.ok ? response.text() : "<style>/* Error loading styles */</style>";
  }
  async init() {
    await this.loadStyle(
      '/assets/animations/animation.css',
      '/components/layout/layoutStyle.css');

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);

    //Espera a que el loader termine

    await new Promise(resolve => {
      const loader = this.shadowRoot.querySelector('loader-component');
      if(loader){
        loader.addEventListener('loader-finished', () => {
          resolve();
        }, { once: true });
      } else {
        //Si no hay loader, continuar de inmediato
        resolve();
      }
    });

    //Mostrar el contenido con fade-in
    const main = this.shadowRoot.querySelector('main');
    const nav = this.shadowRoot.querySelector('navbart-component');
    if(main) main.style.opacity = '1';
    if(nav) nav.style.opacity = '1';

    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
 
}

customElements.define("layout-component", LayoutComponent);
