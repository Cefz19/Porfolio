import { SharedResources } from "../shared/SharedResources.js";
import { ServicesCard } from "../../cards/serviceCard.js";
import { serviceData } from "../../data/serviceData.js";

class ServicesComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");

    const cardsHTML = serviceData.map(service => `
        <service-card
          icon="${service.icon}"
          color="${service.color}"
          job="${service.job}"
          description="${service.description}"
          link="${service.link}">
        </service-card>
      `).join('');
    template.innerHTML = `    
        <!-- SERVICES -->

        <div class="services" id="services">

            <div class="container">

              <h1 class="sub-title">My <span>Services</span></h1>
                <div class="services-list">
                  ${cardsHTML}
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

    const serviceCard = this.shadowRoot.querySelector('service-card');

    if(serviceCard) {
      serviceCard.getAttribute('icon');
      serviceCard.getAttribute('color');
      serviceCard.getAttribute('job');
      serviceCard.getAttribute('description');
      serviceCard.getAttribute('link');
    }

    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
}

customElements.define('service-card', ServicesCard);
customElements.define("services-component", ServicesComponent);
