import { SharedResources } from "../shared/SharedResources.js";

class ContactmeComponent extends SharedResources {
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `    
         <!--   FOOTER    -->

    <section class="contact" id="contact">
        <div class="contact-text">

            <h2>Contact <span>Me</span></h2>
            <h4>Les´t work Together</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolor vero delectus esse dolorum sit,
                cupiditate nihi</p>

            <div class="contact-list">
                <li><i class="bx bxs-send">contact@gmail.com</i></li>
                <li><i class="bx bxs-phone">1234556</i></li>
            </div>

            <div class="contact-icons">
                <a href="#"><i class="bx bxl-facebook-circle"></i></a>
                <a href="#"><i class='bx bxs-x-circle'></i></a>
                <a href="#"><i class="bx bxl-instagram"></i></a>
                <a href="#"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    </section>
    <section class="contact-form">
        <form action="">
            <input type="" placeholder="Enter Your Name" required>
            <input type="email" placeholder="" required>
            <input type="" placeholder="Enter Your Email" required>
            <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message"></textarea>
            <input type="submit" value="submit" class="send">
        </form>
    </section>

    <div class="last-text">
        <p>Developer with love by Cesar Zendejas @2025</p>
        <a href="#" class="top"><i class='bx bx-up-arrow-alt'></i></a>
    </div>

    `;
    return template;
  }
  async getStyle() {
    const response = await fetch("/components/contact/contactmeStyle.css");
    return response.ok ? response.text() : "<p>Error loader</p>";
  }
  async init() {
    await this.loadStyle(
      "/assets/animations/animation.css",
      "/components/contact/contactmeStyle.css"
    );

    const template = this.getTemplate();
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.initializeTyped();
    await this.loadBoxiconsCSS();
  }
}

customElements.define("contactme-component", ContactmeComponent);
