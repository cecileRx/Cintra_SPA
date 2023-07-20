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
      <div class="video-project">
        <h2 class="video-project-title"> ${media.name} </h2>
        <div class="video-container">
          <iframe src=${media.url_src} style="margin-right: 1%; margin-left: 1%;" width="98%" height=""  title=${media.url_title}
        frameborder="0" allowfullscreen></iframe>
         </div>
        <p class="video-description">${media.url_description}</p>
      </div>
    `;
  }
}


