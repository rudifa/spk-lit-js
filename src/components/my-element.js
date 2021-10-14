import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static properties = {
    greeting: {},
    planet: {},
  };

  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
      font-size: 30px;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.
    this.greeting = 'Hello';
    this.planet = 'World';
  }

  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }

  togglePlanet() {
    this.planet = this.planet === 'World' ? 'Mars' : 'World';
  }
}
