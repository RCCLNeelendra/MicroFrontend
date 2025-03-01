import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
class MyButton extends LitElement {
  static properties = {
    label: { type: String }
  };

  label = 'Click Me';

  static styles = css`
    button {
      background-color: #1d4ed8;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
    button:hover {
      background-color: #1e40af;
    }
  `;

  render() {
    return html`<button @click=${this._handleClick}>${this.label}</button>`;
  }

  private _handleClick() {
    alert('Button clicked!');
  }
}