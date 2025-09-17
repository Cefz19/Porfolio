import { SharedResources } from "../shared/SharedResources.js";

class HomeComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
    <!-- HOME -->

    <section class="home">
        <div class="home-content">
            <h3>Hello, It´s Me</h3>
            <h1>Cesar Zendejas Torres</h1>
            <h3>And I´m a <span class="text">Computer System Engineer</span></h3>
            <p>With extensive experince for over 3 years<br> Expertise is to create and website desing</p>

            <div class="home-sci">
                <a href="#" style="--i:6"><i class='bx bxl-facebook-circle'></i></a>
                <a href="#" style="--i:7"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#" style="--i:8"><i class='bx bxl-linkedin'></i></a>
                <a href="#" style="--i:9"><i class='bx bxl-github'></i></a>
            </div>
            <a href="#" class="btn-box">More About Me</a>
        </div>
        <div class="home-img"></div>

        <span class="home-imghover"></span>
    </section>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/home/homeStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      '/assets/animations/animation.css',
      '/components/home/homeStyle.css');

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
 
}

customElements.define("home-component", HomeComponent);
