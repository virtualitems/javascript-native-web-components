# Javascript Native Web Components

The javascript native web components are a set of web components that are built using only javascript and the web component api. They are designed to be lightweight and reusable.

## Compatibility

The javascript native web components are compatible with all modern browsers but you can check the availability with:

```javascript
if ('customElements' in window) {
  // Custom elements is supported!
}
```

## Defining a component

To define a component you need to extend the HTMLElement class and register the component with the customElements api.

```javascript
customElements.define('web-component', WebComponent);
```

Is a good practice to use two words for the component name and separate them with a dash.

## Using a component

To use a component you just need to add the component tag to your html.

```html
<web-component>
    Hello World!
</web-component>
```

## Component lifecycle

The component lifecycle is composed of 4 methods:

- **constructor:** is called when the object is created.
- **connectedCallback:** is called when the component is added to the DOM.
- **disconnectedCallback:** is called when the component is removed from the DOM.
- **attributeChangedCallback:** is called when an attribute was added, removed or updated.

## More information

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).

[Web Components](https://www.webcomponents.org/).
