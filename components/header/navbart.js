import { SharedResources } from "../shared/SharedResources.js";

class NavbartComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
        <!--   HEADER   -->

    <header class="header">
        <div class="logo">
          <a href="#">Porfolio</a>
        </div>

        <div class="navbar">
            <a href="#" class="active">Home</a>
            <a href="#" >About</a>
            <a href="#" >Skill</a>
            <a href="#" >Porfolio</a>
            <a href="#" >Contact</a>
        </div>
    </header>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/header/navbartStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      '/assets/animations/animation.css',
      '/components/header/navbartStyle.css');

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
 
}

customElements.define("navbart-component", NavbartComponent);
