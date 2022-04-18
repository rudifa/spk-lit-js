import { LitElement, html, css } from 'lit';
import { ClockController } from './clock-controller.js';

export class MyClock extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 9em;
      text-align: left;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }
    .time,
    .wrap {
      font-family: 'JetBrains Mono', monospace;
      font-size: 24px;
    }
    .wrap {
      color: #00f;
      border: 1px solid #00f;
      padding: 10px;
    }
  `;

  // Create the controller and store it
  clock = new ClockController(this, 1000);

  // Use the controller in render()
  render() {
    const formattedTime = timeFormat.format(this.clock.value);
    return html` <div class="wrap">Current time: ${formattedTime}</div> `;
  }
}
customElements.define('my-clock', MyClock);

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});
