import { LitElement, html, css } from 'lit';
import {property, customElement} from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message1 = 'Learn Snowpack';
  @property() message2 = 'Learn Lit';

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 24px;
      }
      .link {
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Snowpack + Lit</h1>
        <p>Edit <code>src/app-root.js</code> and save to reload.</p>
        <a class="link" href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer"> ${this.message1} </a>
        <br/>
        <a class="link" href="https://lit.dev/" target="_blank" rel="noopener noreferrer"> ${this.message2} </a>
      </div>
    `;
  }
}
