import { SharedResources } from "../shared/SharedResources.js";
import { TestsProjectCard } from "../../cards/testCard/testProjectCard.js";

class TestsComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    

        <!--   TEST PROJECT   -->


    <section>
        <div id="portfolio" id="project">
            <div class="main-text" id="project">
            
                <h2>The Test <span>Project</span></h2>

                <div class="portfolio-content">

                  <testproject-car

                  >
                  </testproject-car>
                </div>
            </div>
        </div>
    </section>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/tests/testsComponentStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      '/assets/animations/animation.css',
      '/components/tests/testsComponentStyle.css');

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
 
}

customElements.define('testproject-car', TestsProjectCard);
customElements.define("tests-component", TestsComponent);
