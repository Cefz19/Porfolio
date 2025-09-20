import { SharedResources } from '../Modules/MainModules.js';

export class ServicesCard extends SharedResources {
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
        
            <div class="services-list">
                <div>
                    <i class='bx ${this.icon}' style='color: ${this.color}'></i>
                    <h2>${this.job}</h2>
                    <p>${this.description}</p>
                    <a href="${this.link}" class="read">Learm More</a>
                </div>
            </div>    
        `;
        return template;
    }
    async getStyle() {
    const response = await fetch("/cards/serviceCardStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
    }
    async init() {
    await this.loadStyle(
        '/assets/animations/animation.css',
        '/cards/serviceCardStyle.css');

        const template = this.getTemplate();
        const clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
        this.initializeTyped();
        await this.loadBoxiconsCSS();
    }
}


