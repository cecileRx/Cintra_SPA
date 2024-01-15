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

    function hideAudioContainer() {
      const hiddenDiv = document.querySelector('.audio-container');
      hiddenDiv.style.display = 'none'
    }

    hideAudioContainer();

    console.log(media.url_link)

    return `


      <h1 class="video-name"> ${media.name} </h1>
      <p>
         <iframe
          class="video"
          src=${media.url_src}
          title=${media.url_title}
          description=${media.url_src}
          frameborder="0"
          ></iframe>
      </p>
      <p class="video-description">
        ${media.url_description}
      </p>

    `;
  }
}




