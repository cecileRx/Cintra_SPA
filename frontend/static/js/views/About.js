import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  async getHtml() {
    return `
      <div id = "about-view">
        <h1>Hello About</h1>
       <a class="view-link" href="/" data-link> LINK TO HOME </a>
      </div>
    `;
  }
}
