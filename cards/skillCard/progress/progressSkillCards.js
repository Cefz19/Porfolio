import { SharedResources } from '../../../Modules/MainModules.js';

export class ProgressSkillCard extends SharedResources {
    static get observedAttributes(){
        return ['icon', 'color', 'title', 'tecnology'];  
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return;

    switch(attr) {
        case 'icon':
            this.icon = newVal;
            break;
        case 'color':
            this.color = newVal;
            break;
        case 'title':
            this.title = newVal;
            break;
        case 'tecnology':
            this.tecnology = newVal;
            break;
    }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `

        <!-- SERVICES CARD -->
            <div class="bar">
                <i class='bx ${this.icon}' style="color: ${this.color}"></i>
                    <div class="info">
                        <span>${this.title}</span>
                    </div>
                    <div class="progress-line ${this.tecnology}">
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


