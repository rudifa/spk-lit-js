import { LitElement, html, css } from 'lit';

// 1 support for event dispatching

/**
 * Returns a custom event ready for dispatch.
 * @param {*} eventid
 * @param {*} value
 * @returns {Event}
 */
const menuEvent = (eventid, value) => {
  const event = new CustomEvent(eventid, {
    detail: value,
    bubbles: true,
    composed: true,
  });
  return event;
};

// 2 supprt for custom Object property converters

/**
 * Custom Object property converter helper function, tolerates a bad JSON input
 * @param {*} inputString
 * @param {*} fallback
 * @returns
 */
const parseJSON = (inputString) => {
  if (inputString) {
    try {
      const object = JSON.parse(inputString);
      console.log('parseJSON', object);
      return object;
    } catch (e) {
      console.log('parseJSON error', e);
      return undefined;
    }
  }
  return undefined;
};

// 3 the compenent class

/**
 * A dropdown menu component
 * Inputs:
 * - eventid: string, the event id to dispatch when the menu is clicked
 * - label: string, the label to display in the menu
 * - options: object, e.g { t: 'Triangle', s: 'Square', p: 'Pentagon', c: 'Circle' }
 * Outputs:
 * - fires a custom event with the eventid and the selected option when the menu is clicked
 */
export class DropdownMenu extends LitElement {
  static styles = css`
    :host {
      color: green;
      font-size: 1.2rem;
      padding: 10px;
    }
    .wrap,
    .dropdown {
      color: #00f;
      border: 1px solid #00f;
      font-size: 1.5rem;
      padding: 10px;
      background-color: #e4e9be;
    }

    input,
    button,
    label {
      font-size: 1.5rem;
    }

    .select {
      color: red;
      font-size: 1.5rem;
    }

    .dropdown {
      display: block;
      position: relative;
    }
  `;

  static properties = {
    eventid: { type: String },
    label: { type: String },
    options: { type: Object },
    objectpropunused: {
      // unused in the component, demo of a custom attribute converter protecting against bad json input
      type: Object,
      converter: (attrValue) => {
        return parseJSON(attrValue);
      },
    },
  };

  constructor() {
    super();
    this.eventid = 'dropdown-menu-event';
    this.label = 'Choose a branch:';
    this.options = {
      a: 'Art',
      b: 'Biology',
      c: 'Chemistry',
      d: 'Drama',
      e: 'English',
    };

    this._selected = undefined;
  }

  htmlOptions(options) {
    const keys = Object.keys(options);
    return html`
      ${keys.map(
        (key) => html`<option value="${key}">${options[key]}</option>`,
      )}
    `;
  }

  selectOption(e) {
    this._selected = e.target.value;
    const newEvent = menuEvent(this.eventid, this._selected);
    console.log('DropdownMenu.selectOption eventid:', this.eventid);
    console.log(
      'DropdownMenu.selectOption selected:',
      this._selected,
      'newEvent:',
      newEvent,
    );
    this.dispatchEvent(newEvent);
  }

  render() {
    console.log('render options:', this.htmlOptions(this.options));
    console.log('render objectprop:', this.objectprop);
    return html`
      <div class="wrap">
        <label for="field-names"> ${this.label} </label>
        <select class="select" id="field-names" @change="${this.selectOption}">
          ${this.htmlOptions(this.options)}
        </select>
        <br />
      </div>
    `;
  }
}

customElements.define('dropdown-menu', DropdownMenu);
