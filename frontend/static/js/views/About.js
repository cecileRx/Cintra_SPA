import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  async getHtml() {
    return `
 <div id="about-container">
      <h2 class="about-title">About Miguel</h2>
      <div class="about-text">
      <p class="about-prem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nisi et alias totam
        exercitationem facilis fugiat nulla deserunt expedita aliquid, impedit doloremque at eveniet
        similique nobis neque repellendus temporibus perferendis?</p>
      <p class="about-text_2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus minus,
        voluptates
        non minima odio optio, quam dicta earum necessitatibus aliquid a excepturi facilis accusantium voluptatem aperiam
        tenetur esse repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum aspernatur cumque officiis
        autem atque, nulla ut? Voluptatum assumenda aliquam rem dolores id nulla laborum? Vero eligendi impedit quasi
        dolores
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi, vitae enim non repellat, earum, eos optio ab
        labore similique culpa perferendis natus! Qui officiis quo earum exercitationem commodi ea! Lorem ipsum dolor sit
        amet
        consectetur adipisicing elit. Cupiditate voluptas exercitationem ea, quod dolorem voluptatum eligendi, facilis
        veritatis voluptate ipsa recusandae? Fugiat dolor molestiae explicabo culpa distinctio dolorum earum porro?</p>
        <p class="about-text_3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus minus,
        voluptates
        non minima odio optio, quam dicta earum necessitatibus aliquid a excepturi facilis accusantium voluptatem aperiam
        tenetur esse repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum aspernatur cumque officiis
        autem atque, nulla ut? Voluptatum assumenda aliquam rem dolores id nulla laborum? Vero eligendi impedit quasi
        dolores
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi, vitae enim non repellat, earum, eos optio ab
        labore similique culpa perferendis natus! Qui officiis quo earum exercitationem commodi ea! Lorem ipsum dolor sit
        amet
        consectetur adipisicing elit. Cupiditate voluptas exercitationem ea, quod dolorem voluptatum eligendi, facilis
        veritatis voluptate ipsa recusandae? Fugiat dolor molestiae explicabo culpa distinctio dolorum earum porro?</p>
    </div>
    </div>

    `;
  }
}
