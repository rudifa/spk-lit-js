import { LitElement, html, css } from 'lit';

// source: https://lit.dev/tutorial/#04-events

export class NameTag extends LitElement {
  static styles = css`
    :host {
      padding: 10px;
      font-size: 1.5rem;
    }
    .wrap {
      color: #00f;
      border: 1px solid #00f;
      font-size: 1.5rem;
      padding: 10px;
    }
    input {
      font-size: 1rem;
    }
  `;

  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'your name here';
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  render() {
    return html`
      <div class="wrap">
        <p>Hello, ${this.name}</p>
        <input @input=${this.changeName} placeholder="Enter your name" />
      </div>
    `;
  }
}
customElements.define('name-tag', NameTag);
