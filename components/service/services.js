import { SharedResources } from "../shared/SharedResources.js";

class ServicesComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
        <!-- SERVICES -->

    <div class="services" id="services">

        <div class="container">

            <h1 class="sub-title">My <span>Services</span></h1>
            
            <div class="services-list">
                <div>
                    <i class='bx bx-code' style='color:rgba(36,220,237,0.74)'></i>
                    <h2>UI/UX Desing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste provident dolorem eaque alias pariatur?</p>
                    <a href="#" class="read">Learm More</a>
                </div>
            </div>
        </div>
    </div>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/service/servicesStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      "/assets/animations/animation.css",
      "/components/service/servicesStyle.css"
    );

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
}

customElements.define("services-component", ServicesComponent);
