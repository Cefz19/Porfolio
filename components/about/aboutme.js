import { SharedResources } from "../shared/SharedResources.js";

class AboutmeComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
        <!-- ABOUT ME -->
    <section class="about" id="about">
        <div class="about-img">
            <img src="../assets/img/Cesar.png" alt="My photo">
        </div>
        <div class="about-text">
            <h2>About<span>Me</span></h2>
            <h4>Full Stack Developer!</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, officia natus ipsum provident debitis porro accusantium praesentium expedita eligendi nisi id iste. Sunt inventore cupiditate voluptates accusantium odit pariatur maxime!
            </p>
            <a href="#" class="btn-box">More About Me</a>
        </div>
    </section>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/about/aboutmeStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      "/assets/animations/animation.css",
      "/components/about/aboutmeStyle.css"
    );

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
}

customElements.define("aboutme-component", AboutmeComponent);
