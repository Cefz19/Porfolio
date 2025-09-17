export class SetupLazyLoader {
    constructor(root){
        this.root = root;
    }

    lazyloadSections(){
        const observer = new IntersectionObserver(async (entries) => {
            for(const entry of entries){
                if(entry.isIntersecting){
                    const section = entry.target.dataset.section;
                    await this.loadComponent(section);
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.1 });
        this.root.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
    }

    async loadComponent(section) {
        switch(section) {
            case 'home':
                await import('../components/home/homeComponent.js');
                break;
            case 'about':
                await import('../components/about/aboutme.js');
                break;
            case 'services':
                await import('../components/service/services.js');
                break;
            case 'skills':
                await import('../components/skill/skills.js');
                break;
            case 'contact':
                await import('../components/contact/contactme.js');
                break;
        }
    }
}