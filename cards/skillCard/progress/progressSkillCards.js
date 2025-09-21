import { SharedResources } from '../../../Modules/MainModules.js';

export class ProgressSkillCard extends SharedResources {
    static get observedAttributes(){
        return ['icon', 'color', 'job', 'description', 'link'];  
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'icon'){
            this.icon = newVal;
        }
         if (attr === 'color'){
            this.color = newVal;
        }
        if(attr === 'job'){
            this.job = newVal;
        }
         if (attr === 'description'){
            this.description = newVal;
        }
        if(attr === 'link'){
            this.link = newVal;
        }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `

        <!-- SERVICES CARD -->
            <div class="bar"><i class='bx bxl-html5' style="color: #c95d2e"></i>
                <div class="info">
                    <span>HTML</span>
                </div>
                <div class="progress-line html">
                    <span></span>
                </div>
            </div>   
        `;
        return template;
    }
    async getStyle() {
    const response = await fetch("/cards/skillCard/progress/progressSkillCardsStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
    }
    async init() {
    await this.loadStyle(
        '/assets/animations/animation.css',
        '/cards/skillCard/progress/progressSkillCardsStyle.css');

        const template = this.getTemplate();
        const clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
        this.initializeTyped();
        await this.loadBoxiconsCSS();
    }
}


