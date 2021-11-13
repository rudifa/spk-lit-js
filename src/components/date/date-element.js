import { LitElement, html, css } from 'lit';
import { localDateFromUTC } from './date-utils.js';
import './date-display.js';

// from https://lit.dev/playground/#sample=examples/properties-has-changed

export class DateElement extends LitElement {
  static styles = css`
    .wrap {
      color: #00f;
      border: 1px solid #00f;
    }
  `;
  static properties = {
    date: {},
  };

  render() {
    return html`
      <div class="wrap">
        <p>Choose a date: <input type="date" @change=${this._dateChanged} /></p>
        <p><button @click=${this._chooseToday}>Choose Today</button></p>
        <p>Date chosen: <date-display .date=${this.date}></date-display></p>
      </div>
    `;
  }

  _dateChanged(e) {
    const utcDate = e.target.valueAsDate;
    if (utcDate) {
      this.date = localDateFromUTC(utcDate);
    }
  }

  _chooseToday() {
    this.date = new Date();
  }
}
customElements.define('date-element', DateElement);
