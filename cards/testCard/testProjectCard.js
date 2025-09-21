import { SharedResources } from '../../Modules/MainModules.js';

export class TestsProjectCard extends SharedResources {
    static get observedAttributes(){
        return ['img', 'project', 'description', 'icon', 'color', 'link'];  
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === 'img'){
            this.img = newVal;
        }
        if(attr === 'project'){
            this.project = newVal;
        }
        
        if(attr === 'description'){
            this.description = newVal;
        }
        if (attr === 'icon'){
            this.icon = newVal;
        }
        if (attr === 'color'){
            this.color = newVal;
        }
        if(attr === 'link'){
            this.link = newVal;
        }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `

        <!--   TEST PROJECT CARD -->


        <div class="row">
            <img src="${this.img}" alt="Desing1">
            <div class="layer">
                <h5>${this.project}</h5>
                <p>${this.description}</p>
                <a href="${this.link}"><i class='bx ${this.icon}' style="color: ${this.color}"></i>
                </a>
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


