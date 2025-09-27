import { SharedResources } from "../shared/SharedResources.js";
import { progressSkillData } from "../../data/progressSkillData.js";
import { ProgressSkillCard } from "../../cards/skillCard/progress/progressSkillCards.js";
import { radialSkillData } from "../../data/radialSkillData.js";
import { RadialSkillCard } from "../../cards/skillCard/radial/radialSkillCards.js";

class SkillsComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");

    const SkillsProgressCardHTML = progressSkillData.map(progr =>  `
        <progress-card
        icon="${progr.icon}"
        color= "${progr.color}"
        title="${progr.title}"
        tecnology= "${progr.tecnology}"
        ></progress-card>
        `).join('');

    const SkillRadialCardHTML = radialSkillData.map(rad => `
        <radial-card
        percentage="${rad.percentage}"
        text="${rad.text}"
        class="${rad.class}"
        radius="${rad.radius}"
        ></radial-card>
        `).join('');


    template.innerHTML = `    
        <!-- SKILLS -->

        <h1 class="sub-title">My <span>Skills</span></h1>

        <section class="container">
        <div class="container-technical">

            <div class="container1" id="skills">
                <h1 class="heading1">Technical Skills</h1>
                <div class="technical-bars">
                    ${SkillsProgressCardHTML}
                </div>

            </div>

            <!-- RADIAL -->

            <div class="container1">
                <h1 class="heading1">Professional Skills</h1>

                <div class="radial-bars">
                   ${SkillRadialCardHTML}
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
customElements.define("progress-card", ProgressSkillCard);
customElements.define("radial-card", RadialSkillCard);
customElements.define("skills-component", SkillsComponent);
