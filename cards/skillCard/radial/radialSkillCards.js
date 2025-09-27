import { SharedResources } from '../../../Modules/MainModules.js';

export class RadialSkillCard extends SharedResources {
    static get observedAttributes(){
        return [ 'text', 'radius', 'percentage', 'class' ];  
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'text'){
            this.text = newVal;
        }
        if(attr === 'radius'){
            this.radius = newVal;
        }
        if(attr === 'percentage'){
            this.percentage = newVal;
        }
        if(attr === 'class'){
            this.class = newVal;
        }
    }

    getTemplate(){

        const template = document.createElement('template');
        template.innerHTML = `

        <!-- SERVICES CARD -->
            <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="${this.radius}"></circle>
                    <circle class="path ${this.class}" cx="100" cy="100" r="${this.radius}"></circle>
                </svg>
                <div class="percentage">${this.percentage}%</div>
                <div class="text-radial">${this.text}</div>
            </div> 
        `;
        return template;
    }
    async getStyle() {
    const response = await fetch(
        '/cards/skillCard/radial/radialSkillCardsStyle.css',
    );
    return response.ok ? response.text() : "<p>Error loader</p>";
    }
    
    async init() {
    await this.loadStyle(
        'assets/animations/animation.css',
        '/cards/skillCard/radial/radialSkillCardsStyle.css',
    );

        const template = this.getTemplate();
        const clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
        this.initializeTyped();
        await this.loadBoxiconsCSS();
    }
}


