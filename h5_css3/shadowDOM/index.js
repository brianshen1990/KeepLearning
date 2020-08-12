window.onload = () => {
  // shadowDOM manual
  const shadowRoot = document.querySelector("#shadowRoot");
  const shadow = shadowRoot.attachShadow({mode: 'open'});
  const style = document.createElement('style');
  style.textContent = `
  p { color: blue; }
`;
  shadow.appendChild(style);
  const header = document.createElement('h2');
  const content = document.createElement('p');
  header.innerHTML = "Card Header (ShadowDOM Manual)"
  content.innerHTML = "Card Content, I'm added to shadowRoot in a shadow DOM"
  shadow.appendChild(header);
  shadow.appendChild(content);

  
  // shadowDOM in class
  class PopUpInfo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // write element functionality in here
      const shadow = this.attachShadow({mode: 'open'});
      const info = document.createElement('p');
      const text = this.getAttribute('data-text');
      info.innerHTML = text;
      shadow.appendChild(info);
    }
  }
  customElements.define('popup-info', PopUpInfo);

  class CardInfo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      // write element functionality in here

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `<style>
  :host { border: 1px dashed black; display: block;  }
  #outer { background-color: orange; }
  /* #content::slotted(p) { background-color: green; } */ 
  p { background-color: green; }
  #header::slotted(h2) { background-color: gray; }
</style>
<div id="outer">
  <slot id="header" name="header"></slot>
  <slot id="content" name="content"></slot>
</div>
`;
    }
  }
  customElements.define('card-info', CardInfo);


}

