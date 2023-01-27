import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
      <div class="title">
      <div class="signature">
          <h3>MIGUEL CINTRA</h3>
          <p>composer . sound designer . music producer</p>
      </div>
      <div class="contact">
          <p class="contact-mail">miguelmcintra@gmail.com</p>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/miguel-cintra/"> <i class="fa-brands fa-linkedin"></i></a>
            <a href="https://miguelcintra.bandcamp.com/"> <i class="fa-brands fa-bandcamp"></i></a>
          </div>
      </div>
    </div>
  </div>
    `;
  };
};
