import { LitElement, html } from 'lit';
import { isSameDate } from './date-utils.js';

// from https://lit.dev/playground/#sample=examples/properties-has-changed

class DateDisplay extends LitElement {
  static properties = {
    date: {
      // For wrapper types like Date, simple comparison won't work, because
      // each Date is a new object
      hasChanged: (value, oldValue) => {
        return !isSameDate(value, oldValue);
      },
    },
  };

  get datefield() {
    return this.renderRoot?.querySelector('#datefield') ?? null;
  }

  frames = [
    { backgroundColor: '#fff' },
    { backgroundColor: '#324fff' },
    { backgroundColor: '#fff' },
  ];

  render() {
    return html`<span id="datefield">${this.date?.toLocaleDateString()}</span>`;
  }

  updated(changed) {
    if (changed.has('date')) {
      this.datefield.animate(this.frames, 1000);
    }
  }
}
customElements.define('date-display', DateDisplay);
