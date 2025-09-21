import { SharedResources } from "../shared/SharedResources.js";

class SkillsComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
        <!-- SKILLS -->

        <section class="container">
        <h1 class="sub-title">My <span>Skills</span></h1>
        <div class="container-technical">

            <div class="container1" id="skills">
                <h1 class="heading1">Technical Skills</h1>

                <div class="technical-bars">
                    <div class="bar"><i class='bx bxl-html5' style="color: #c95d2e"></i>
                        <div class="info">
                            <span>HTML</span>
                        </div>
                        <div class="progress-line html">
                            <span></span>
                        </div>
                    </div>

                    <div class="bar"><i class='bx bxl-css3' style="color: #147bbc"></i>
                        <div class="info">
                            <span>CSS</span>
                        </div>
                        <div class="progress-line css">
                            <span></span>
                        </div>
                    </div>

                    <div class="bar"><i class='bx bxl-javascript' style="color: #b0bc1e"></i>
                        <div class="info">
                            <span>JavaScript</span>
                        </div>
                        <div class="progress-line javascript">
                            <span></span>
                        </div>
                    </div>

                    <div class="bar"><i class='bx bxl-python' style="color: #cc58ec"></i>
                        <div class="info">
                            <span>Python</span>
                        </div>
                        <div class="progress-line python">
                            <span></span>
                        </div>
                    </div>

                    <div class="bar"><i class='bx bxl-react' style="color: #69bcbc"></i>
                        <div class="info">
                            <span>React</span>
                        </div>
                        <div class="progress-line react">
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- RADIAL -->

            <div class="container1" id="skills">
                <h1 class="heading1">Professional Skills</h1>

                <div class="radial-bars">

                     <div class="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="percentage">90%</div>
                        <div class="text">Creativity</div>
                    </div>

                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="percentage">65%</div>
                        <div class="text">Communication</div>
                    </div>

                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-3" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="percentage">75%</div>
                        <div class="text">Problem Solving</div>
                    </div>

                    <div class="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle class="path path-4" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div class="percentage">85%</div>
                        <div class="text">Teamwork</div>
                    </div>

                </div>
            </div>

        </div>
    </section>
    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/skill/skillsStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      "/assets/animations/animation.css",
      "/components/skill/skillsStyle.css"
    );

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
}

customElements.define("skills-component", SkillsComponent);
