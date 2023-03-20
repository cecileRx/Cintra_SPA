import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Contact");
  }

  async getHtml() {
    return `
      <h3>Work in Progress</h3>

    `;
  }
}
