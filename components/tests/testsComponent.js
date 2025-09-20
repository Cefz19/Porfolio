import { SharedResources } from "../shared/SharedResources.js";

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

                    <div class="row">
                        <img src="#" alt="Desing1">
                        <div class="layer">
                            <h5>UI/UX Desing</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quae quis ullam, rem
                                delectus quasi facere tempora error voluptatem est tenetur rerum.</p>
                            <a href="#"><i class='bx bx-link-external' style="color: rgba(74, 255, 149, 0.703)"></i>
                            </a>
                        </div>
                    </div>
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

customElements.define("tests-component", TestsComponent);
