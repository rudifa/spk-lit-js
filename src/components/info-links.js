import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('info-links')
export class InfoLinks extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: 3rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
        padding: 20px;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 20px;
      }
      .link {
        color: white;
      }
    `;
  }

  @state() space = '    ';

  render() {
    return html`
      <div class="wrapper">
        <a
          class="link"
          href="https://www.snowpack.dev/"
          target="_blank"
          rel="noopener noreferrer">
          Snowpack
        </a>
        ${this.space}
        <a
          class="link"
          href="https://lit.dev/"
          target="_blank"
          rel="noopener noreferrer">
          Lit
        </a>
      </div>
    `;
  }
}
