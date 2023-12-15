import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Project");
  }

  async getHtml() {
    console.log("this is the params", this.params.id)

    const requestURL = '/static/data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const mediaList = await response.json();

    function filterById(jsonObject, id) { return jsonObject.filter(function (jsonObject) { return (jsonObject['id'] == id); })[0]; }

    let media = filterById(mediaList, this.params.id);

    console.log(media.url_link)

    return `
      <h1> ${media.name} </h1>
      <p>
         <iframe src=${media.url_src} width="560" height="315" title=${media.url_title}
      frameborder="0" allowfullscreen></iframe>
      </p>
    `;
  }
}




