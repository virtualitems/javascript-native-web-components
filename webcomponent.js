class WebComponent extends HTMLElement {

  /**
   * @property {NamedNodeMap} attributes
   * @property {ShadowRoot} shadowRoot
   * @property {HTMLTemplateElement} template
   */
  constructor() {
    super();

    // initialize the Shadow DOM
    this.attachShadow({ mode: 'open' });

    // make the template
    this.template = document.createElement('template');
    this.template.innerHTML = `<h1><slot></slot></h1>`;
  }

  static get observedAttributes() {
    // return an array of attribute names
    return ['class', 'id', 'lang', 'style', 'title'];
  }

  connectedCallback() {
    // the component has been added to the DOM
    const node = this.template.content.cloneNode(true);
    this.shadowRoot.appendChild(node);
    console.log('connectedCallback');
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    // an observed attribute was changed
    console.log('attributeChangedCallback', attributeName, oldValue, newValue);
  }

  disconnectedCallback() {
    // the component has been removed from the DOM
    // dispose DOM elements
    // remove event listeners
    // nullify references
    // stop intervals
    console.log('disconnectedCallback');
  }

  adoptedCallback() {
    // the element was moved to a new document
    console.log('adoptedCallback');
  }
}

customElements.define('web-component', WebComponent);
