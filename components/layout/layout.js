import * as MainModules from '../../Modules/MainModules.js';


class LayoutComponent extends MainModules.SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
    <div class="layout">
        <header>
        <loader-component></loader-component>
          <navbart-component></navbart-component>
        </header>
        <main>
          <section data-section='home'>
            <home-component></home-component>
          </section>
          <section data-section='about'>
            <aboutme-component></aboutme-component>
          </section>
          <section data-section='service'>
            <services-component></services-component>
          </section>
          <section data-section='skills'>
            <skills-component></skills-component>
          </section>
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

    const lazyLoader = new MainModules.SetupLazyLoader(this.shadowRoot);
    lazyLoader.lazyloadSections();



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
