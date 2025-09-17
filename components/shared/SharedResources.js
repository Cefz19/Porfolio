export class SharedResources extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async loadTemplate(url) {
    const response = await fetch(url);
    if(!response.ok){
      console.log(`Error loading template from ${url}`)
    }
    const html = response.ok ? await response.text() : '<p>Error loader</p>';
    const template = document.createElement('template');
    template.innerHTML = html;
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  }

  async loadStyle(...hrefs){
    for(const href of hrefs){
      const response = await fetch(href);
      const css = response.ok ? await response.text() : '';
      const style = document.createElement('style');
      style.textContent = css;
      this.shadowRoot.appendChild(style);
    }
    

    const head = document.head;
    /* Boxicon */ 
    if (!document.querySelector("link[href*='boxicons']")) {
      const boxicons = document.createElement("link");
      boxicons.rel = "stylesheet";
      boxicons.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
      head.appendChild(boxicons);
    }

    /* Typed.js */ 
    if (!document.querySelector("script[src*='typed.umd.js']")) {
      const typedScript = document.createElement("script");
      typedScript.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
      head.appendChild(typedScript);
    }
  }
    async loadBoxiconsCSS() {
    const response = await fetch("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
    const css = response.ok ? await response.text() : '';
    const style = document.createElement("style");
    style.textContent = css;
    this.shadowRoot.appendChild(style);
  }
  initializeTyped() {
  const target = this.shadowRoot.querySelector(".text");
  if (target && window.Typed) {
    new Typed(target, {
      strings: ["Computer System Engineer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  } else {
    // Esperar a que el script se cargue
    const checkTyped = setInterval(() => {
      if (window.Typed && this.shadowRoot.querySelector(".text")) {
        clearInterval(checkTyped);
        this.initializeTyped();
      }
    }, 100);
  }
}
  async connectedCallback() {
    if(this._hasRendered) return;
    this._hasRendered = true;

    if(typeof this.init === 'function') {
      await this.init();
    }
  }
}