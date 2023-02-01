import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Projects");
  }

  async getHtml() {
    return `
      <h1>Hello Projects</h1>
      <p>
        PROJECT 1:
        <a href="/projects/1"> LINK TO VIDEO 1 </a>
      </p>
      <p>
        PROJECT 2:
        <a href="/projects/2"> LINK TO VIDEO 2 </a>
      </p>

    `;
  }
}
