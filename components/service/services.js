import { SharedResources } from "../shared/SharedResources.js";
import { ServicesCard } from "../../data/dataService.js";

class ServicesComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
        <!-- SERVICES -->

        <div class="services" id="services">

            <div class="container">

              <h1 class="sub-title">My <span>Services</span></h1>
                <div class="services-list">
                    <service-card
                    icon="bx-code-alt"
                    color="#ff5733"
                    job="Frontend Developer"
                    description="Building responsive and modern websites."
                    link="https://example.com"
                    ></service-card>

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

    console.log("Valores recibidos:");
    console.log("icon:", this.icon);
    console.log("color:", this.color);
    console.log("job:", this.job);
    console.log("description:", this.description);
    console.log("link:", this.link);

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
}

customElements.define("services-component", ServicesComponent);
