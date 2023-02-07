import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Projects");
  }

  async getHtml() {
    return `

      <svg id="atom" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.84 25.82"  witdh="50px" height="50px" xml:space="preserve">
<a class='atom-link' href="/" data-link>
<rect  x="5" y="0" fill="white" opacity="0" width="30px" height="50px"></rect>
</a>
<defs>

    <style>
      .cls-1 {
        fill: #29abe2;
      }
    </style>
  </defs>
  <g>
    <path class="cls-1" d="M7.96,6.74l-.09-.05C10.12,2.7,14.36,.22,18.94,.22c1.24,0,2.46,.18,3.64,.53l-.03,.09c-1.17-.35-2.38-.53-3.61-.53C14.4,.32,10.19,2.78,7.96,6.74Z"/>
    <path class="cls-1" d="M18.94,25.62c-7,0-12.7-5.7-12.7-12.7,0-.77,.07-1.53,.2-2.28l.1,.02c-.13,.74-.2,1.5-.2,2.26,0,6.95,5.65,12.6,12.6,12.6,1.01,0,2.02-.12,3-.36l.02,.09c-.98,.24-2,.36-3.02,.36Z"/>
    <path class="cls-1" d="M23.74,24.68l-.04-.09c4.76-1.95,7.84-6.53,7.84-11.67,0-4.76-2.64-9.07-6.89-11.23l.04-.09c4.28,2.18,6.94,6.52,6.94,11.32,0,5.18-3.1,9.8-7.9,11.76Z"/>
    <path class="cls-1" d="M14.5,24.81s-.02,0-.02,0l-3.21-1.77s-.03-.04-.02-.06c0-.02,.03-.03,.06-.03l1.95,.54s.02,0,.02,.01l1.26,1.23s.02,.04,0,.06c0,.01-.02,.02-.04,.02Zm-2.82-1.67l2.53,1.4-.99-.97-1.54-.43Z"/>
    <path class="cls-1" d="M18.31,25.6s0,0,0,0l-3.81-.79s-.04-.03-.04-.05c0-.02,.02-.04,.05-.04h1.91s.01,0,.02,0l1.91,.79s.04,.04,.03,.06c0,.02-.03,.03-.05,.03Zm-3.33-.79l2.84,.59-1.42-.59h-1.42Z"/>
    <path class="cls-1" d="M11.29,23.04s-.03,0-.03-.01l-2.56-2.61s-.02-.04,0-.06c.01-.02,.04-.03,.06-.01l2.56,1.3s.03,.03,.03,.04v1.3s-.01,.04-.03,.05c0,0-.01,0-.02,0Zm-2.31-2.48l2.26,2.31v-1.15l-2.26-1.15Z"/>
    <path class="cls-1" d="M13.24,23.58s-.02,0-.03-.01l-1.95-1.84s-.02-.04,0-.06c.01-.02,.04-.03,.06-.02l2.64,.92s.03,.02,.03,.03c0,.01,0,.03,0,.04l-.69,.92s-.02,.02-.03,.02c0,0,0,0,0,0Zm-1.75-1.77l1.74,1.65,.62-.82-2.36-.82Z"/>
    <path class="cls-1" d="M16.4,23.58s-.01,0-.02,0l-2.47-.92s-.03-.03-.03-.05,.01-.04,.03-.05l2.47-.92s.05,0,.06,.02l.76,1.3s0,.05-.01,.06l-.76,.54s-.02,0-.03,0Zm-2.33-.97l2.32,.87,.7-.5-.72-1.23-2.31,.86Z"/>
    <path class="cls-1" d="M16.4,24.81s-.01,0-.02,0l-3.16-1.23s-.03-.02-.03-.04c0-.02,0-.04,.02-.05l3.16-1.84s.03,0,.05,0c.02,0,.02,.02,.02,.04v3.08s0,.03-.02,.04c0,0-.02,0-.03,0Zm-3.05-1.29l3,1.17v-2.92l-3,1.75Z"/>
    <path class="cls-1" d="M11.29,21.74s-.02,0-.03-.01l-1.9-1.7s-.02-.02-.02-.04,0-.03,.02-.04l1-.88s.03-.01,.04-.01c.02,0,.03,.02,.03,.03l.9,2.58s0,.04-.02,.06c0,0-.02,0-.03,0Zm-1.83-1.75l1.72,1.54-.81-2.33-.9,.8Z"/>
    <path class="cls-1" d="M18.31,25.6s-.04-.01-.05-.04c0-.02,0-.05,.03-.06l1.62-.79s.02,0,.03,0l1.62,.39s.04,.03,.04,.05c0,.02-.02,.04-.04,.05l-3.24,.39s0,0,0,0Zm1.63-.79l-1.34,.65,2.69-.33-1.34-.33Z"/>
    <path class="cls-1" d="M11.29,23.04s-.03,0-.03-.01l-2.56-2.61s0,0,0,0l-1.42-2.48s0-.05,.02-.06c.02-.01,.05,0,.07,.01l3.97,5.09s.01,.05,0,.07c0,0-.02,.01-.03,.01Zm-2.52-2.68l1.95,1.98-3.02-3.87,1.08,1.89Z"/>
    <path class="cls-1" d="M31.39,10.7s-.02,0-.03-.01l-2.3-2.13s-.02-.03-.01-.05l.69-2.13s.02-.03,.05-.03c.02,0,.04,.01,.05,.03l1.6,4.25s0,.05-.02,.06c0,0-.02,0-.03,0Zm-2.24-2.19l2.12,1.96-1.48-3.93-.64,1.96Z"/>
    <path class="cls-1" d="M29.78,6.45s-.02,0-.02,0l-1.69-.88s-.02-.01-.02-.02l-.99-2.26s0-.05,.02-.06c.02-.01,.05,0,.06,0l2.68,3.14s.02,.04,0,.06c0,.01-.02,.02-.04,.02Zm-1.65-.96l1.46,.76-2.3-2.7,.85,1.95Z"/>
    <path class="cls-1" d="M28.09,7.49s-.03,0-.04-.02l-1.77-1.92s-.02-.03,0-.05c0-.02,.03-.03,.04-.03h1.77s.05,.02,.05,.05v1.92s-.01,.04-.03,.05c0,0-.01,0-.02,0Zm-1.66-1.92l1.61,1.75v-1.75h-1.61Z"/>
    <path class="cls-1" d="M27.1,3.31h-1.12s-.03,0-.04-.02l-1.12-1.52s-.01-.05,0-.06c.02-.02,.04-.02,.06,0l2.24,1.52s.03,.03,.02,.05c0,.02-.03,.03-.05,.03Zm-1.09-.1h.94l-1.87-1.27,.94,1.27Z"/>
    <path class="cls-1" d="M28.09,5.57s-.02,0-.03-.01l-1.77-1.39s-.01-.01-.02-.02l-.33-.88s0-.05,.02-.06c.02-.01,.05,0,.06,0l2.1,2.26s.02,.05,0,.07c0,.01-.02,.02-.04,.02Zm-1.73-1.46l1.27,1-1.51-1.63,.24,.63Z"/>
    <path class="cls-1" d="M29.09,8.57s-.04-.01-.05-.03l-1-3s0-.05,.02-.06c.02-.01,.04,0,.06,0l2.6,2.7s.02,.03,.01,.05c0,.02-.02,.03-.04,.03l-1.6,.3s0,0,0,0Zm-.89-2.86l.92,2.76,1.47-.28-2.39-2.48Z"/>
    <path class="cls-1" d="M31.55,14.03s-.04-.01-.05-.03l-.86-2.78s0-.04,.02-.05l.7-.55s.03-.01,.05,0c.02,0,.03,.02,.03,.04l.16,3.34s-.02,.05-.04,.05c0,0,0,0,0,0Zm-.8-2.81l.73,2.38-.14-2.85-.6,.47Z"/>
    <path class="cls-1" d="M24.04,24.55s-.03,0-.04-.02c-.02-.02-.02-.04,0-.06l.83-1.27s.01-.01,.02-.02l2.84-1.54s.05,0,.06,.01c.01,.02,.01,.04,0,.06l-1.11,1.3s0,0-.01,.01l-2.56,1.51s-.02,0-.02,0Zm.86-1.28l-.71,1.09,2.37-1.4,.94-1.1-2.6,1.41Z"/>
    <path class="cls-1" d="M24.87,23.27s-.02,0-.03,0l-1.72-1.08s-.03-.03-.02-.05c0-.02,.02-.03,.04-.04l1.72-.46s.03,0,.04,0c.01,0,.02,.02,.02,.04v1.54s0,.03-.03,.04c0,0-.02,0-.02,0Zm-1.6-1.11l1.55,.98v-1.39l-1.55,.41Z"/>
    <path class="cls-1" d="M26.59,23.04s-.02,0-.03,0l-1.73-1.3s-.02-.03-.02-.05c0-.02,.03-.03,.05-.03h3.19s.04,.01,.05,.03c0,.02,0,.04-.01,.05l-1.46,1.3s-.02,.01-.03,.01Zm-1.58-1.3l1.58,1.19,1.34-1.19h-2.92Z"/>
    <path class="cls-1" d="M28.06,21.74s-.02,0-.02,0c-.02-.01-.03-.03-.02-.06l.39-1.29s.02-.03,.03-.03l.95-.35s.04,0,.06,.02c.01,.02,.01,.04,0,.06l-1.33,1.64s-.02,.02-.04,.02Zm.43-1.3l-.31,1.03,1.06-1.31-.76,.28Z"/>
    <path class="cls-1" d="M11.29,21.74s-.03,0-.04-.02c-.01-.02-.02-.04,0-.06l1.95-3.18s.04-.03,.07-.02l2.06,1.15s.02,.02,.02,.04c0,.02,0,.03-.02,.04l-1.37,.79-2.65,1.24s-.01,0-.02,0Zm1.97-3.16l-1.84,3,2.49-1.17,1.29-.74-1.94-1.09Z"/>
    <path class="cls-1" d="M16.4,21.74s-.01,0-.02,0l-6.01-2.58s-.03-.03-.03-.06c0-.02,.03-.04,.05-.04l4.91,.56s.03,.01,.04,.03l1.11,2.03s0,.04,0,.06c0,.01-.02,.02-.04,.02Zm-5.69-2.54l5.58,2.39-1.03-1.88-4.55-.52Z"/>
    <path class="cls-1" d="M6.85,16.69s-.04-.02-.05-.04l-.51-2.66-.05-2.8s.02-.05,.05-.05c.03,0,.05,.02,.05,.04l.56,5.45s-.02,.05-.04,.05c0,0,0,0,0,0Zm-.49-4.36l.03,1.66,.3,1.57-.33-3.23Z"/>
    <path class="cls-1" d="M6.34,14.03s-.02,0-.03-.01c-.02-.01-.02-.04-.01-.06l.98-1.88s.03-.03,.05-.02c.02,0,.04,.02,.04,.05v1.27s0,.03-.02,.04l-.98,.62s-.02,0-.03,0Zm.93-1.73l-.8,1.55,.8-.5v-1.04Z"/>
    <path class="cls-1" d="M6.85,16.69s-.02,0-.03,0c-.01-.01-.02-.03-.02-.05l.46-3.27s.02-.04,.05-.04c.02,0,.04,.02,.05,.04l.54,2.83s0,.04-.03,.05l-1,.44s-.01,0-.02,0Zm.47-3.02l-.41,2.89,.88-.39-.47-2.5Z"/>
    <path class="cls-1" d="M7.85,17.58s-.02,0-.03-.01l-1-.88s-.01-.02-.02-.03l-.51-2.66s0-.05,.03-.06c.02,0,.05,0,.06,.03l1.51,3.54s0,.05-.02,.06c0,0-.02,0-.03,0Zm-.95-.96l.82,.73-1.25-2.92,.42,2.19Z"/>
    <path class="cls-1" d="M10.39,19.15s-.02,0-.03,0l-2.54-1.58s-.02-.02-.02-.04v-1.33s.01-.04,.03-.05c.02,0,.04,0,.05,.01l2.54,2.91s.02,.05,0,.06c0,.01-.02,.02-.04,.02Zm-2.49-1.66l2.24,1.39-2.24-2.56v1.17Z"/>
    <path class="cls-1" d="M8.1,6.45s-.02,0-.03-.01c-.02-.02-.02-.05,0-.07l1.29-1.77s0,0,0,0l1.9-1.78s.05-.02,.07,0c.02,.02,.02,.05,0,.07l-3.19,3.55s-.02,.02-.04,.02Zm1.32-1.79l-.73,1,1.8-2-1.07,1Z"/>
    <path class="cls-1" d="M12.34,2.9h-1.05s-.04-.02-.05-.04c0-.02,0-.04,.02-.05l2.11-1.11s.05,0,.06,.01c.01,.02,.01,.05,0,.06l-1.05,1.11s-.02,.02-.04,.02Zm-.86-.1h.83l.83-.88-1.67,.88Z"/>
    <path class="cls-1" d="M9.39,4.68s-.04-.01-.05-.03c0-.02,0-.05,.02-.06l2.95-1.78s.04,0,.06,0c.02,.01,.02,.03,.01,.05l-.45,1.23s-.02,.03-.04,.03l-2.5,.55s0,0-.01,0Zm2.86-1.71l-2.58,1.55,2.18-.48,.39-1.07Z"/>
    <path class="cls-1" d="M14.47,1.79h-1.08s-.04-.02-.05-.04c0-.02,0-.05,.03-.05l2.15-1.01s.05,0,.06,.02c.01,.02,.01,.05,0,.06l-1.08,1.01s-.02,.01-.03,.01Zm-.86-.1h.84l.84-.79-1.67,.79Z"/>
    <path class="cls-1" d="M13.68,4.13s-.01,0-.02,0c-.01,0-.02-.02-.03-.03l-.28-.82s0-.03,0-.04c0-.01,.02-.02,.04-.02h1.9s.04,.02,.05,.04c0,.02,0,.04-.03,.06l-1.62,.82s-.01,0-.02,0Zm-.22-.82l.24,.7,1.38-.7h-1.63Z"/>
    <path class="cls-1" d="M22.34,.78h-1.62s-.02,0-.02,0l-.79-.46s-.03-.04-.02-.06c0-.02,.03-.04,.05-.03l2.41,.46s.04,.03,.04,.05c0,.03-.02,.04-.05,.04Zm-1.6-.1h1.09l-1.62-.31,.53,.31Z"/>
    <path class="cls-1" d="M20.72,.78s0,0,0,0l-2.77-.46s-.04-.03-.04-.05c0-.03,.02-.04,.05-.04h1.98s.02,0,.02,0l.79,.46s.03,.04,.02,.06c0,.02-.03,.03-.05,.03Zm-2.18-.46l1.92,.32-.55-.32h-1.37Z"/>
    <path class="cls-1" d="M30.57,17.95h0s-.04-.02-.05-.04l-.33-1.36s0-.03,.01-.04l1.15-1.36s.04-.02,.06-.01c.02,.01,.03,.03,.02,.06l-.82,2.72s-.03,.03-.05,.03Zm-.28-1.39l.28,1.16,.7-2.32-.98,1.16Z"/>
    <path class="cls-1" d="M30.17,18.79s0,0-.01,0c-.02,0-.04-.03-.04-.05l.2-2.35s.02-.04,.05-.04c.03,0,.05,.02,.05,.04l.2,1.51s0,.02,0,.03l-.4,.84s-.03,.03-.04,.03Zm.21-1.95l-.14,1.63,.28-.58-.14-1.05Z"/>
    <path class="cls-1" d="M29.39,17.58s-.02,0-.03-.01l-.67-.65s-.02-.03-.01-.05c0-.02,.02-.03,.04-.03l1.51-.32s.04,0,.05,.02c.01,.02,0,.04,0,.06l-.85,.98s-.02,.02-.03,.02h0Zm-.57-.67l.56,.55,.72-.83-1.28,.28Z"/>
    <path class="cls-1" d="M30.17,18.79s-.03,0-.04-.02l-.78-1.22s-.01-.04,0-.05c0-.02,.03-.03,.05-.02l1.26,.13s.03,.01,.04,.02c0,.01,0,.03,0,.04l-.47,1.09s-.02,.03-.04,.03c0,0,0,0,0,0Zm-.69-1.21l.68,1.05,.41-.95-1.09-.11Z"/>
    <path class="cls-1" d="M10.01,8.57h-1.28s-.04-.01-.04-.03c0-.02,0-.04,0-.05l.96-1.08s.03-.02,.05-.02c.02,0,.03,.02,.04,.03l.31,1.08s0,.03,0,.04c0,.01-.02,.02-.04,.02Zm-1.17-.1h1.1l-.27-.93-.83,.93Z"/>
    <path class="cls-1" d="M9.39,8.57h-.66s-.03,0-.04-.02c0-.01-.01-.03,0-.04l.66-2.37s.03-.04,.05-.04c.02,0,.04,.02,.04,.05v2.37s-.02,.05-.05,.05Zm-.59-.1h.55v-1.96l-.55,1.96Z"/>
    <path class="cls-1" d="M9.06,9.15h-.96s-.04-.02-.05-.04c0-.02,0-.05,.03-.05l.71-.32-.11-.19s0-.03,0-.05c0-.02,.02-.02,.04-.02h.66s.04,.02,.05,.04c0,.02,0,.05-.03,.05l-.48,.21,.17,.29s0,.03,0,.05c0,.02-.02,.02-.04,.02Zm-.73-.1h.65l-.13-.23-.51,.23Zm.48-.48l.07,.12,.27-.12h-.34Z"/>
    <path class="cls-1" d="M7.85,10.7s-.01,0-.02,0c-.02,0-.03-.03-.03-.05l.25-1.55s.02-.04,.05-.04h.96s.04,.01,.04,.03,0,.04,0,.05l-1.21,1.55s-.02,.02-.04,.02Zm.29-1.55l-.21,1.32,1.03-1.32h-.82Z"/>
    <path class="cls-1" d="M10.01,8.57s-.04-.01-.05-.04l-.31-1.08s0-.04,.02-.05l1.17-.96s.05-.01,.07,0l1.48,1.5s.02,.03,.01,.05c0,.02-.02,.03-.04,.03l-2.33,.54s0,0-.01,0Zm-.26-1.11l.29,1,2.2-.51-1.38-1.41-1.11,.91Z"/>
    <path class="cls-1" d="M12.01,16.25h-2.62s-.04-.01-.04-.03c0-.02,0-.04,0-.05l1.9-2.28s.03-.02,.05-.02c.02,0,.03,.02,.04,.03l.72,2.28s0,.03,0,.04c0,.01-.02,.02-.04,.02Zm-2.51-.1h2.45l-.67-2.13-1.78,2.13Z"/>
    <path class="cls-1" d="M13.93,17.58s-.02,0-.02,0l-2.43-1.32h-2.09s-.05-.02-.05-.05l-.09-1.19s0-.03,.02-.04c.02,0,.03-.01,.05,0l2.18,1.19h.5s.02,0,.03,0l1.92,1.33s.03,.04,.01,.07c0,.01-.03,.02-.04,.02Zm-2.25-1.33l1.46,.79-1.15-.79h-.31Zm-2.25-.1h1.86l-1.94-1.06,.08,1.06Z"/>
    <path class="cls-1" d="M9.3,15.06s-.02,0-.03-.01c-.02-.01-.02-.03-.02-.05l1.09-3.33s.02-.03,.04-.03c.02,0,.04,.01,.05,.03l.9,2.24s0,.05-.02,.06l-1.99,1.09s-.02,0-.02,0Zm1.09-3.24l-1.01,3.08,1.84-1.01-.83-2.07Z"/>
    <path class="cls-1" d="M13.93,17.58s-.03,0-.04-.02l-2.64-3.61s-.01-.04,0-.06c.01-.02,.04-.02,.06-.02l2.64,1.09s.03,.03,.03,.05v2.52s-.01,.04-.03,.05c0,0-.01,0-.02,0Zm-2.5-3.55l2.45,3.35v-2.34l-2.45-1.01Z"/>
    <path class="cls-1" d="M11.29,21.74s0,0,0,0c-.03,0-.05-.02-.05-.05v-7.77s.02-.04,.04-.05c.03,0,.05,.01,.05,.03l.72,2.28s0,.01,0,.02l-.72,5.49s-.02,.04-.05,.04Zm.05-7.5v6.7l.62-4.73-.62-1.97Z"/>
    <path class="cls-1" d="M7.85,16.25s-.01,0-.02,0c-.02,0-.03-.02-.03-.04l-.54-2.83s0-.04,.02-.05c.02-.01,.04,0,.06,0l1.99,1.64s.02,.02,.02,.04,0,.03-.02,.04l-1.45,1.19s-.02,.01-.03,.01Zm-.46-2.75l.49,2.61,1.34-1.1-1.84-1.51Z"/>
    <path class="cls-1" d="M10.39,19.15s0,0,0,0c-.02,0-.04-.01-.04-.03l-1-2.91s0-.03,0-.04c0-.01,.02-.02,.04-.02h2.62s.03,0,.04,.02c0,.01,0,.03,0,.05l-1.62,2.91s-.02,.03-.04,.03Zm-.93-2.91l.94,2.74,1.52-2.74h-2.47Z"/>
    <path class="cls-1" d="M15.3,3.31s-.03,0-.04-.03l-.83-1.52s0-.03,0-.04c0-.01,.02-.02,.04-.03l6.25-1.01s.05,.01,.05,.03c0,.02,0,.05-.03,.06l-5.43,2.53s-.01,0-.02,0Zm-.75-1.53l.77,1.41L20.38,.84l-5.83,.94Z"/>
    <path class="cls-1" d="M13.68,4.13h-1.79s-.04-.02-.05-.04c0-.02,0-.04,.02-.05l1.51-.82s.03,0,.04,0c.01,0,.02,.02,.03,.03l.28,.82s0,.03,0,.04c0,.01-.02,.02-.04,.02Zm-1.6-.1h1.53l-.24-.7-1.29,.7Z"/>
    <path class="cls-1" d="M13.4,3.31s-.01,0-.02,0l-1.05-.41s-.03-.02-.03-.04c0-.02,0-.04,.03-.05l2.13-1.11s.04,0,.06,.01c.01,.02,.02,.04,0,.06l-1.08,1.52s-.02,.02-.04,.02Zm-.94-.46l.92,.36,.94-1.32-1.85,.96Z"/>
    <path class="cls-1" d="M18.94,7.97s-.03,0-.04-.02c-.01-.02-.01-.04,0-.06l2.19-2.4s.04-.02,.05-.01c.02,0,.03,.03,.03,.05v1.5s-.01,.04-.03,.05l-2.19,.89s-.01,0-.02,0Zm2.14-2.32l-1.96,2.14,1.96-.8v-1.34Z"/>
    <path class="cls-1" d="M19.93,11.24s-.01,0-.02,0l-3.23-1.19s-.03-.02-.03-.03c0-.02,0-.03,.01-.04l1.06-1.19s.02-.02,.04-.02h0s.03,0,.04,.02l2.16,2.38s.02,.04,0,.06c0,.01-.02,.02-.04,.02Zm-3.14-1.26l2.97,1.1-1.99-2.19-.98,1.1Z"/>
    <path class="cls-1" d="M19.93,13.42s-.02,0-.03,0c-.01,0-.02-.02-.02-.04v-2.18s0-.03,.02-.04c.01,0,.03-.01,.05,0l2.85,1.13s.03,.03,.03,.05c0,.02-.01,.04-.03,.05l-2.85,1.05s-.01,0-.02,0Zm.05-2.16v2.04l2.67-.98-2.67-1.05Z"/>
    <path class="cls-1" d="M23.72,20.15h-2.17s-.02,0-.03-.01l-.83-.67s-.02-.04-.01-.06c0-.02,.03-.03,.05-.03l3,.67s.04,.03,.04,.05c0,.02-.02,.04-.05,.04Zm-2.16-.1h1.71l-2.36-.52,.65,.52Z"/>
    <path class="cls-1" d="M15.3,19.71s-.02,0-.02,0l-2.06-1.15s-.02-.02-.02-.03c0-.01,0-.03,0-.04l.69-.98s.03-.02,.04-.02c.02,0,.03,0,.04,.02l1.37,2.14s0,.04,0,.06c0,0-.02,.02-.04,.02Zm-1.99-1.22l1.84,1.03-1.22-1.91-.62,.88Z"/>
    <path class="cls-1" d="M27.71,13.96s0,0,0,0c-.02,0-.03-.01-.04-.03l-.67-1.64s0-.03,0-.05c0-.01,.02-.02,.04-.02h1.69s.03,0,.04,.03c0,.02,0,.03,0,.05l-1.02,1.64s-.02,.02-.04,.02Zm-.59-1.64l.6,1.48,.92-1.48h-1.53Z"/>
    <path class="cls-1" d="M22.78,9.15s-.03,0-.04-.02c-.01-.01-.01-.03-.01-.04l.37-1.6s.01-.03,.03-.03c.01,0,.03,0,.04,0l2.25,1.31s.03,.03,.02,.05c0,.02-.02,.04-.04,.04l-2.62,.29s0,0,0,0Zm.4-1.57l-.34,1.46,2.4-.26-2.07-1.2Z"/>
    <path class="cls-1" d="M25.4,8.86s-.01,0-.02,0l-4.26-1.79s-.04-.04-.03-.06c0-.02,.03-.04,.06-.03l2.01,.48s0,0,.01,0l2.25,1.31s.03,.04,.02,.06c0,.02-.03,.03-.04,.03Zm-3.69-1.65l3.01,1.27-1.59-.93-1.42-.34Z"/>
    <path class="cls-1" d="M20.04,20.92s-.02,0-.03-.01c-.02-.01-.02-.04-.01-.06l.68-1.44s.02-.02,.03-.03c.02,0,.03,0,.04,0l.83,.67s.02,.03,.02,.04c0,.02-.01,.03-.03,.04l-1.51,.77s-.01,0-.02,0Zm.7-1.41l-.6,1.25,1.32-.67-.72-.58Z"/>
    <path class="cls-1" d="M21.35,20.5s-.04-.01-.05-.04c0-.02,0-.05,.03-.06l4.04-1.7s.05,0,.06,.02c.01,.02,0,.05-.01,.06l-1.67,1.35s-.01,0-.02,.01l-2.37,.35s0,0,0,0Zm3.74-1.57l-3.37,1.42,1.97-.29,1.4-1.13Z"/>
    <path class="cls-1" d="M23.15,22.19s-.03,0-.04-.02l-1.6-2.05s-.01-.04,0-.06c.01-.02,.04-.02,.06-.01l3.32,1.59s.03,.03,.03,.05-.02,.04-.04,.04l-1.72,.46s0,0-.01,0Zm-1.43-1.96l1.45,1.86,1.56-.41-3.01-1.44Z"/>
    <path class="cls-1" d="M24.09,1.29s-.01,0-.02,0l-.82-.37s-.03-.02-.03-.04c0-.02,0-.03,.02-.04l.46-.37s.03-.01,.04,0c.01,0,.03,.01,.03,.03l.37,.74s0,.04,0,.06c0,0-.02,.02-.04,.02Zm-.73-.43l.63,.28-.28-.56-.35,.28Z"/>
    <path class="cls-1" d="M1.79,9.06s.03,.04,.02,.06c0,.02-.03,.03-.05,.03,0,0,0,0-.01,0m-.3-.17"/>
  </g>
  <g>
    <path class="cls-1" d="M19.93,24.79s0,0-.01,0l-2.77-1.77s-.01-.02-.01-.03c0-.01,.01-.02,.02-.02l5.98-.85s.02,0,.03,.01c0,0,0,.02,0,.03l-3.22,2.62s0,0-.02,0Zm-2.7-1.78l2.7,1.73,3.14-2.55-5.83,.83Z"/>
    <path class="cls-1" d="M7.09,12.55s-.01,0-.02,0c0,0,0-.02,0-.03l.76-1.88s0-.01,.01-.01c0,0,.01,0,.02,0l2.54,1.03s.02,.01,.02,.02c0,.01,0,.02-.02,.02l-3.3,.85s0,0,0,0Zm.77-1.87l-.73,1.81,3.18-.82-2.45-.99Z"/>
    <path class="cls-1" d="M11.29,13.94s-.02,0-.02-.01c0-.01,0-.02,0-.03l5.41-3.92s.02,0,.03,0c0,0,.01,.01,.01,.02v1.59s0,.02-.01,.02l-5.41,2.33s0,0,0,0Zm5.39-3.89l-5.19,3.76,5.19-2.23v-1.52Z"/>
    <path class="cls-1" d="M13.93,15.03s-.02,0-.02-.01c0,0,0-.02,0-.03l2.77-3.42s.02-.01,.03,0l3.23,1.78s.01,.01,.01,.02c0,0,0,.02-.02,.02l-6,1.64s0,0,0,0Zm2.78-3.41l-2.71,3.34,5.87-1.6-3.16-1.74Z"/>
    <path class="cls-1" d="M15.3,19.69s-.02,0-.02-.01c0,0,0-.02,0-.03l4.63-6.29s.02-.01,.03,0c0,0,.02,.01,.02,.02l.79,6.06s0,.01,0,.02c0,0-.01,0-.02,0l-5.43,.23h0Zm4.62-6.25l-4.57,6.2,5.35-.23-.78-5.97Z"/>
    <path class="cls-1" d="M17.16,23.01s0,0,0,0c0,0-.01,0-.02-.01l-3.23-7.98s0-.02,0-.03c0,0,.02,0,.03,0l6.79,4.42s.01,.01,.01,.02c0,0,0,.01,0,.02l-3.56,3.56s-.01,0-.02,0Zm-3.18-7.95l3.19,7.88,3.51-3.51-6.7-4.37Z"/>
    <path class="cls-1" d="M28.09,20.89s-.01,0-.02,0l-2.69-2.13s0-.01,0-.02c0,0,0-.02,.01-.02l3.33-1.87s.02,0,.03,0c0,0,.01,.01,.01,.02l-.63,4s0,.02-.02,.02c0,0,0,0,0,0Zm-2.65-2.15l2.63,2.08,.62-3.91-3.25,1.83Z"/>
    <path class="cls-1" d="M21.55,25.18h0l-5.15-.39s-.02-.01-.02-.03c0-.01,.01-.02,.02-.02l7.32-.13h0s.02,0,.02,.02c0,.01,0,.02-.02,.03l-2.17,.52s0,0,0,0Zm-4.63-.4l4.63,.35,1.95-.47-6.58,.12Z"/>
    <path class="cls-1" d="M24.09,15.78s0,0,0,0c0,0-.01,0-.01-.01l-1.31-3.44s0-.02,0-.03c0,0,.02,0,.03,0l4.93,1.6s.02,.01,.02,.02c0,0,0,.02-.01,.02l-3.62,1.84s0,0-.01,0Zm-1.27-3.42l1.28,3.37,3.54-1.8-4.82-1.56Z"/>
    <path class="cls-1" d="M20.72,19.46s-.02,0-.02-.01c0,0,0-.02,0-.03l3.37-3.68s.01,0,.02,0c0,0,.01,0,.02,.01l1.31,2.99s0,.01,0,.02c0,0-.01,.01-.02,.01l-4.68,.69s0,0,0,0Zm3.36-3.66l-3.3,3.6,4.58-.67-1.28-2.92Z"/>
    <path class="cls-1" d="M7.91,6.74s-.02,0-.02-.01c0,0,0-.02,0-.03l1.47-2.09s.01,0,.02-.01c0,0,.01,0,.02,0l1.48,1.85s0,.02,0,.02-.01,.01-.02,.01l-2.95,.24h0Zm1.48-2.07l-1.43,2.02,2.85-.23-1.43-1.79Z"/>
    <path class="cls-1" d="M6.29,11.21s0,0-.01,0c-.01,0-.01-.02-.01-.03l1.62-4.47s.01-.02,.03-.02c.01,0,.02,.01,.02,.02l.19,2.38s0,.01,0,.02l-1.81,2.09s-.01,0-.02,0Zm1.61-4.38l-1.54,4.24,1.71-1.98-.18-2.26Z"/>
    <path class="cls-1" d="M10.39,11.7h0s-.02,0-.02-.01l-1.33-2.58s0-.01,0-.02c0,0,0-.01,.01-.01l3.28-1.11s.02,0,.03,0c0,0,0,.02,0,.03l-1.95,3.69s-.01,.01-.02,.01Zm-1.29-2.59l1.3,2.51,1.9-3.6-3.2,1.09Z"/>
    <path class="cls-1" d="M13.93,15.03s0,0,0,0c0,0-.02,0-.02-.02l-1.59-7.02s0-.02,0-.02c0,0,.02,0,.03,0l4.36,2.02s.01,0,.01,.01c0,0,0,.01,0,.02l-2.77,5.01s-.01,.01-.02,.01Zm-1.55-7l1.56,6.91,2.73-4.93-4.29-1.98Z"/>
    <path class="cls-1" d="M12.34,8.01s0,0,0,0c-.01,0-.02-.01-.02-.02l-.45-3.91s0-.01,0-.02c0,0,.01,0,.02,0h1.79s.02,0,.02,.01c0,0,0,.01,0,.02l-1.34,3.91s-.01,.02-.02,.02Zm-.42-3.91l.44,3.77,1.29-3.77h-1.73Z"/>
    <polygon class="cls-1" points="17.75 8.83 13.66 4.09 13.7 4.06 17.78 8.8 17.75 8.83"/>
    <path class="cls-1" d="M17.76,8.84s0,0,0,0l-5.42-.83s-.01,0-.02-.01c0,0,0-.01,0-.02L14.45,1.73s.01-.02,.02-.02c.01,0,.02,0,.02,.01l3.29,7.07s0,.02,0,.02c0,0-.01,0-.02,0Zm-5.39-.87l5.35,.82L14.47,1.81l-2.1,6.16Z"/>
    <path class="cls-1" d="M21.13,5.54s0,0-.01,0c0,0-.01-.01-.01-.02l-.81-5.02s0-.02,0-.02c0,0,.02,0,.03,0l5.66,2.76s.01,.01,.01,.02,0,.02-.01,.02l-4.85,2.26s0,0-.01,0Zm-.78-5l.8,4.94,4.78-2.23L20.36,.54Z"/>
    <path class="cls-1" d="M12.34,8.01s-.01,0-.02,0c0,0,0-.02,0-.03l2.82-4.77s.02-.02,.03-.01l5.97,2.3s.02,.01,.02,.02c0,.01,0,.02-.02,.02l-8.79,2.46s0,0,0,0Zm2.83-4.76l-2.78,4.7,8.66-2.43-5.89-2.27Z"/>
    <path class="cls-1" d="M22.78,12.34s-.01,0-.02,0c0,0,0-.01,0-.02v-3.22s0-.02,.01-.02c0,0,.02,0,.03,0l4.26,3.18s.01,.02,0,.03c0,0-.01,.02-.02,.02l-4.26,.04h0Zm.02-3.19v3.15l4.16-.04-4.16-3.11Z"/>
    <path class="cls-1" d="M19.93,11.21s0,0,0,0c0,0-.01,0-.02-.02l-.99-3.27s0-.02,0-.02c0,0,.02,0,.02,0l3.84,1.18s.02,.01,.02,.02c0,0,0,.02,0,.02l-2.85,2.09s0,0-.01,0Zm-.95-3.26l.96,3.2,2.79-2.04-3.75-1.15Z"/>
    <path class="cls-1" d="M27.04,12.3s-.02,0-.02-.01l-1.64-3.47s0-.01,0-.02l1.07-3.45s.01-.02,.03-.02c.01,0,.02,.01,.02,.02l.58,6.92s0,.02-.02,.03c0,0,0,0,0,0Zm-1.62-3.49l1.58,3.34-.55-6.66-1.03,3.32Z"/>
    <path class="cls-1" d="M31.39,15.21s-.01,0-.02,0l-2.66-2.91s0-.01,0-.02c0,0,0-.01,.01-.02l1.97-1.08s.02,0,.02,0c0,0,.01,.01,.01,.02l.7,3.99s0,.02-.01,.03c0,0,0,0-.01,0Zm-2.62-2.93l2.59,2.82-.68-3.87-1.91,1.05Z"/>
    <path class="cls-1" d="M28.72,16.9s0,0,0,0c0,0-.01,0-.02-.02l-1.02-2.96s0-.02,0-.03c0,0,.02,0,.03,0l3.68,1.27s.02,.01,.02,.02,0,.02-.01,.02l-2.66,1.68s0,0-.01,0Zm-.98-2.94l.99,2.88,2.59-1.64-3.59-1.24Z"/>
    <path class="cls-1" d="M28.72,12.3s-.01,0-.02,0l-3.33-3.47s0-.02,0-.03c0,0,.01-.01,.02-.02l3.69-.29s.01,0,.02,0c0,0,0,.01,0,.02l-.37,3.76s0,.02-.02,.02c0,0,0,0,0,0Zm-3.27-3.47l3.26,3.39,.36-3.67-3.61,.28Z"/>
    <path class="cls-1" d="M19.93,24.79s0,0-.01,0c0,0-.01-.01-.01-.02l.11-3.89s0-.02,.01-.02c0,0,.01,0,.02,0l3.11,1.27s.01,.01,.01,.02c0,0,0,.02,0,.02l-3.22,2.62s0,0-.02,0Zm.13-3.88l-.11,3.81,3.14-2.56-3.04-1.25Z"/>
    <path class="cls-1" d="M17.76,8.84s0,0,0,0c0,0-.01,0-.02-.01l-2.61-5.59s0-.02,0-.03c.01,0,.02,0,.03,0l3.78,4.7s0,.01,0,.02c0,0,0,.01,0,.02l-1.18,.89s0,0-.01,0Zm-2.5-5.45l2.51,5.38,1.13-.86-3.64-4.52Z"/>
    <path class="cls-1" d="M22.67,7.69s-.01,0-.02,0c0,0,0-.02,0-.03l3.32-4.41s.02-.01,.02,0c0,0,.02,0,.02,.02l.48,2.11s0,.02-.01,.03l-3.79,2.3s0,0-.01,0Zm3.3-4.38l-3.21,4.27,3.67-2.23-.46-2.04Z"/>
    <path class="cls-1" d="M16.03,21.85s-.02,0-.02-.02l-.74-2.16s0-.02,0-.02c0,0,.02,0,.02,0l4.74,1.21s.02,.01,.02,.02,0,.02-.02,.02l-4,.95s0,0,0,0Zm-.7-2.15l.72,2.1,3.89-.93-4.6-1.17Z"/>
    <path class="cls-1" d="M20.72,19.46s0,0,0,0c0,0-.01,0-.02-.01l-4.02-7.84s0-.02,0-.03c0,0,.02,0,.03,0l7.39,4.17s.01,0,.01,.02c0,0,0,.01,0,.02l-3.37,3.68s-.01,0-.02,0Zm-3.96-7.81l3.97,7.74,3.32-3.63-7.29-4.11Z"/>
    <path class="cls-1" d="M21.55,6.78s-.01,0-.02,0c0,0,0-.02,0-.03l3.13-5.11s.01-.01,.02-.01h0s.02,0,.02,.01l1.78,3.72s0,.01,0,.02c0,0,0,.01-.02,.01l-4.91,1.39s0,0,0,0Zm3.13-5.08l-3.07,5.02,4.83-1.36-1.75-3.66Z"/>
    <path class="cls-1" d="M28.09,20.89s-.01,0-.02,0l-2.69-2.13s-.01-.02,0-.03l2.31-4.83s.02-.02,.03-.01c.01,0,.02,.01,.02,.02l.38,6.95s0,.02-.01,.02c0,0,0,0-.01,0Zm-2.66-2.16l2.64,2.08-.38-6.8-2.26,4.72Z"/>
    <path class="cls-1" d="M25.4,18.77s-.01,0-.02,0l-5.47-5.37s0-.01,0-.02c0,0,0-.01,0-.02l5.47-4.56s.02,0,.03,0,.01,.01,.01,.02v9.93s0,.02-.01,.02c0,0,0,0,0,0Zm-5.43-5.4l5.41,5.31V8.86l-5.41,4.51Z"/>
    <path class="cls-1" d="M21.55,25.18s-.01,0-.02,0c0,0,0-.02,0-.03l1.6-3.01s0-.01,.02-.01c0,0,.01,0,.02,0l1.72,1.08s.01,.01,.01,.02c0,0,0,.02-.01,.02l-3.32,1.93s0,0-.01,0Zm1.61-3l-1.54,2.92,3.21-1.87-1.66-1.05Z"/>
    <path class="cls-1" d="M24.87,23.25s0,0,0,0c0,0-.01,0-.02-.01l-1.14-3.13s0-.02,0-.02c0,0,.01,0,.02,0l4.37,.77s.02,0,.02,.02c0,0,0,.02,0,.03l-3.22,2.36s0,0-.01,0Zm-1.11-3.12l1.12,3.06,3.15-2.3-4.27-.75Z"/>
    <path class="cls-1" d="M9.39,16.22s-.01,0-.02,0l-2.07-2.83s0-.01,0-.02l.54-2.72s.01-.02,.02-.02h0s.02,0,.02,.02l1.54,5.55s0,.02-.01,.03c0,0,0,0-.01,0Zm-2.05-2.86l1.99,2.71-1.48-5.32-.51,2.61Z"/>
    <path class="cls-1" d="M10.86,6.51s0,0,0,0l-1.48-.33s-.02,0-.02-.02c0,0,0-.02,0-.02l2.5-2.08s.02,0,.03,0c0,0,.01,.02,0,.03l-1.02,2.41s-.01,.01-.02,.01Zm-1.42-.36l1.41,.31,.98-2.29-2.39,1.98Z"/>
  </g>
  <g>
    <path class="cls-1" d="M25.4,8.88s-.06-.02-.07-.05c0-.03,0-.07,.04-.09l2.69-1.37s.06,0,.09,.02l1,1.08s.02,.05,.01,.08c-.01,.03-.03,.04-.06,.05l-3.69,.29s0,0,0,0Zm2.68-1.35l-2.32,1.18,3.18-.25-.86-.93Z"/>
    <path class="cls-1" d="M28.44,20.47s-.03,0-.04-.01c-.03-.02-.04-.06-.02-.09l1.93-4.01s.05-.05,.09-.04c.03,0,.06,.04,.05,.08l-.2,2.35s0,.03-.02,.05l-1.73,1.65s-.03,.02-.05,.02Zm1.82-3.69l-1.58,3.28,1.42-1.36,.16-1.93Z"/>
    <path class="cls-1" d="M21.95,25.28s-.03,0-.04-.01l-1.09-.71s-.04-.05-.03-.08c0-.03,.04-.05,.07-.05h3.18s.07,.03,.07,.06c0,.04-.01,.07-.05,.08l-2.09,.71s-.02,0-.02,0Zm-.84-.71l.85,.56,1.64-.56h-2.49Z"/>
    <path class="cls-1" d="M9.39,20.06s-.05-.01-.06-.03l-1.54-2.46s-.01-.07,.01-.09l1.54-1.33s.05-.02,.08-.01c.03,.01,.04,.04,.04,.07v3.79s-.02,.06-.05,.07c0,0-.01,0-.02,0Zm-1.44-2.52l1.37,2.19v-3.38l-1.37,1.18Z"/>
    <path class="cls-1" d="M6.29,11.26s-.02,0-.03,0c-.03-.02-.05-.05-.04-.08l.9-3.29s.03-.05,.06-.05c.03,0,.06,0,.07,.03l.9,1.2s.02,.07,0,.09l-1.81,2.09s-.03,.03-.06,.03Zm.94-3.2l-.78,2.84,1.56-1.8-.78-1.04Z"/>
    <path class="cls-1" d="M12.34,8.06s-.05-.01-.06-.03c-.01-.02-.02-.04,0-.07l1.34-3.91s.03-.04,.05-.05c.02,0,.05,0,.07,.01l5.26,3.84s.04,.05,.03,.08c0,.03-.04,.05-.07,.05l-6.6,.07h0Zm1.37-3.86l-1.27,3.71,6.28-.06-5-3.65Z"/>
    <path class="cls-1" d="M11.29,13.99s-.03,0-.04-.01c-.03-.02-.04-.05-.03-.07l1.05-5.93s.02-.04,.04-.05c.02-.01,.04-.01,.06,0l4.36,2.02s.04,.03,.04,.06c0,.03,0,.05-.03,.07l-5.41,3.92s-.03,.01-.04,.01Zm1.11-5.9l-1.01,5.66,5.16-3.74-4.16-1.92Z"/>
    <path class="cls-1" d="M20.72,19.5s-.01,0-.02,0l-6.79-1.9s-.05-.03-.05-.06c0-.03,0-.06,.03-.07l6-4.16s.05-.02,.07,0c.02,.01,.04,.03,.04,.06l.79,6.06s0,.05-.02,.06c-.01,.01-.03,.02-.05,.02Zm-6.62-2.01l6.53,1.83-.76-5.83-5.77,4Z"/>
  </g>
  <g>
    <circle class="cls-1" cx="6.85" cy="8.81" r=".4"/>
    <circle class="cls-1" cx="6.29" cy="11.19" r=".4"/>
    <circle class="cls-1" cx="8.1" cy="9.1" r=".4"/>
    <circle class="cls-1" cx="12.34" cy="8.01" r=".4"/>
    <circle class="cls-1" cx="30.24" cy="16.54" r=".4"/>
    <circle class="cls-1" cx="6.85" cy="16.87" r=".4"/>
    <circle class="cls-1" cx="19.93" cy="13.42" r=".4"/>
    <circle class="cls-1" cx="25.4" cy="8.83" r=".4"/>
    <path class="cls-1" d="M28.88,20.38c0,.22-.18,.4-.4,.4s-.4-.18-.4-.4,.18-.4,.4-.4,.4,.18,.4,.4Z"/>
    <circle class="cls-1" cx="29.78" cy="6.43" r=".4"/>
    <circle class="cls-1" cx="28.09" cy="5.52" r=".4"/>
    <circle class="cls-1" cx="27.1" cy="3.26" r=".4"/>
    <circle class="cls-1" cx="20.59" cy=".73" r=".4"/>
    <path class="cls-1" d="M21.1,19.53c-.06,.21-.27,.34-.49,.28-.21-.06-.34-.27-.28-.49s.27-.34,.49-.28c.21,.06,.34,.27,.28,.49Z"/>
    <path class="cls-1" d="M21.18,24.6c-.06,.21-.27,.34-.49,.28-.21-.06-.34-.27-.28-.49,.06-.21,.27-.34,.49-.28,.21,.06,.34,.27,.28,.49Z"/>
    <path class="cls-1" d="M24.42,24.6c-.06,.21-.27,.34-.49,.28-.21-.06-.34-.27-.28-.49,.06-.21,.27-.34,.49-.28s.34,.27,.28,.49Z"/>
    <circle class="cls-1" cx="13.93" cy="17.57" r=".4"/>
    <circle class="cls-1" cx="13.4" cy="23.65" r=".4"/>
    <circle class="cls-1" cx="29.09" cy="8.52" r=".4"/>
    <path class="cls-1" d="M11.68,21.52c0,.22-.18,.4-.4,.4s-.4-.18-.4-.4,.18-.4,.4-.4,.4,.18,.4,.4Z"/>
    <circle class="cls-1" cx="24.72" cy="1.66" r=".4"/>
    <circle class="cls-1" cx="11.29" cy="2.86" r=".4"/>
    <path class="cls-1" d="M14.08,4.07c0,.22-.18,.4-.4,.4s-.4-.18-.4-.4,.18-.4,.4-.4,.4,.18,.4,.4Z"/>
    <circle class="cls-1" cx="9.29" cy="4.62" r=".4"/>
    <circle class="cls-1" cx="14.47" cy="1.99" r=".4"/>
    <path class="cls-1" d="M19.34,7.91c0,.22-.18,.4-.4,.4s-.4-.18-.4-.4,.18-.4,.4-.4,.4,.18,.4,.4Z"/>
    <circle class="cls-1" cx="11.29" cy="13.99" r=".4"/>
    <path class="cls-1" d="M10.73,19.11c0,.22-.18,.4-.4,.4s-.4-.18-.4-.4,.18-.4,.4-.4,.4,.18,.4,.4Z"/>
    <circle class="cls-1" cx="9.42" cy="16.2" r=".4"/>
    <circle class="cls-1" cx="9.3" cy="19.93" r=".4"/>
    <circle class="cls-1" cx="7.31" cy="7.23" r=".27"/>
    <path class="cls-1" d="M8.18,10.75c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M9.69,15.01c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="12.01" cy="16.27" r=".27"/>
    <path class="cls-1" d="M15.57,19.66c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="16.4" cy="21.69" r=".27"/>
    <circle class="cls-1" cx="21.54" cy="20.45" r=".27"/>
    <path class="cls-1" d="M9.01,20.45c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M13.51,18.51c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M20.31,20.87c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M17.43,22.99c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M25.67,18.87c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="16.39" cy="24.62" r=".27"/>
    <circle class="cls-1" cx="14.5" cy="24.76" r=".27"/>
    <path class="cls-1" d="M27.96,13.92c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="28.69" cy="12.32" r=".27"/>
    <path class="cls-1" d="M31.66,10.65c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="24.87" cy="21.69" r=".27"/>
    <path class="cls-1" d="M23.99,20.1c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M28.36,20.87c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="30.81" cy="11.2" r=".27"/>
    <path class="cls-1" d="M29.08,16.93c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M20.2,24.76c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="13.93" cy="22.72" r=".27"/>
    <path class="cls-1" d="M18.58,25.55c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M28.36,21.82c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="16.39" cy="23.53" r=".27"/>
    <circle class="cls-1" cx="24.87" cy="23.09" r=".27"/>
    <circle class="cls-1" cx="26.46" cy="23.09" r=".27"/>
    <circle class="cls-1" cx="23.21" cy="22.14" r=".27"/>
    <path class="cls-1" d="M27.37,12.37c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M8.12,16.27c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="10.39" cy="11.68" r=".27"/>
    <circle class="cls-1" cx="16.7" cy="11.68" r=".27"/>
    <path class="cls-1" d="M17.94,8.74c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M20.2,11.19c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="26.32" cy="5.52" r=".27"/>
    <circle class="cls-1" cx="24.01" cy="15.8" r=".27"/>
    <path class="cls-1" d="M12,4.08c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="13.4" cy="3.26" r=".27"/>
    <path class="cls-1" d="M15.43,3.26c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="13.4" cy="1.74" r=".27"/>
    <path class="cls-1" d="M15.7,.73c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="26.05" cy="3.49" r=".27"/>
    <path class="cls-1" d="M21.4,7.02c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="23.21" cy="7.62" r=".27"/>
    <circle class="cls-1" cx="22.62" cy=".87" r=".27"/>
    <path class="cls-1" d="M24.2,1.14c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
    <path class="cls-1" d="M23.46,.87c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
    <path class="cls-1" d="M23.91,.5c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
    <path class="cls-1" d="M18.22,.27c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="21.13" cy="5.6" r=".27"/>
    <circle class="cls-1" cx="22.78" cy="12.32" r=".27"/>
    <circle class="cls-1" cx="21.55" cy="6.75" r=".27"/>
    <circle class="cls-1" cx="22.78" cy="9.1" r=".27"/>
    <circle class="cls-1" cx="13.93" cy="15.06" r=".27"/>
    <circle class="cls-1" cx="6.29" cy="14.03" r=".27"/>
    <circle class="cls-1" cx="7.31" cy="13.37" r=".27"/>
    <circle class="cls-1" cx="7.35" cy="12.1" r=".27"/>
    <path class="cls-1" d="M9.33,9.1c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <path class="cls-1" d="M9.66,6.16c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="10.86" cy="6.58" r=".27"/>
    <path class="cls-1" d="M9.96,7.5c0,.15-.12,.27-.27,.27s-.27-.12-.27-.27,.12-.27,.27-.27,.27,.12,.27,.27Z"/>
    <circle class="cls-1" cx="8.73" cy="8.25" r=".27"/>
    <circle class="cls-1" cx="10.01" cy="8.47" r=".27"/>
    <g>
      <path class="cls-1" d="M19.57,.34c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M16.6,.46c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M28.45,5.51c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M28.43,12.04c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M31.84,12.6c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M30.4,7.03c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M30.48,14.26c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M29.88,16.25c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M21,.72c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M12.76,3.54c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M10.54,6.49c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M9.45,7.02c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M7.72,6.45c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M10.13,6.38c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M29.97,10.89c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
      <path class="cls-1" d="M31.13,9.77c0,.11-.09,.19-.19,.19s-.19-.09-.19-.19,.09-.19,.19-.19,.19,.09,.19,.19Z"/>
    </g>
  </g>
</svg>

      <div class="img-container">

        <div class="card-Project">
          <img class="projects-thumb" src="static/images/Projects_thumb/8BallPool.jpg" alt="8 Ball Pool">
          <h4>8 Ball Pool</h4>
          <p>Mobile . sfx</p>
        </div>
        <div class="card-Project">
          <img class="projects-thumb" src="static/images/Projects_thumb/Agent_Klutz.png" alt="">
          <h4>Agent_Klutz</h4>
          <p>PC . Music & sfx</p>
        </div>
        <div class="card-Project">
          <img class="projects-thumb" src="static/images/Projects_thumb/Exophobia.jpg" alt="">
          <h4>Exophobia</h4>
          <p>PC . sfx</p>
        </div>
        <div class="card-Project">
          <img class="projects-thumb" src="static/images/Projects_thumb/Greedy_Guns.jpg" alt="">
          <h4>Greedy Guns</h4>
          <p>PC . sfx</p>
        </div>
        <div class="card-Project">
          <img class="projects-thumb" src="static/images/Projects_thumb/Greedy_Guns_Scream.png" alt="">
          <h4>Greedy Guns Scream</h4>
          <p>PC. sfx</p>
        </div>
        <div class="card-Project">
          <img class="projects-thumb" src="static/images/Projects_thumb/Strikers_Edge.png" alt="">
          <h4>Strikers Edge</h4>
          <p>PS4 . Music & sfx</p>
        </div>

  </div>

    `;
  }
}
