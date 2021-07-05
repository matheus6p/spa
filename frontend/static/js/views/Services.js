import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Services");
  }

  async getHtml() {
    return `
      <h1>Services</h1>
      <p>This is the Services Page</p>
    `;
  }
}
