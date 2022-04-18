import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { InfoLinks } from './components/info-links';
import { MyElement } from './components/my-element';
import { ToDoList } from './components/todo-list';
import { NameTag } from './components/name-tag';
import { DateElement } from './components/date/date-element';
import { MyTimer } from './components/timer/my-timer.js';
import { MyClock } from './components/clock/my-clock.js';
import { DropdownMenu } from './components/dropdown-menu';

// 1 support for the creation and registration of listeners for <dropdown-menu> events

/**
 * This listener factory creates a listener function for the custom <dropdown-menu> event.
 * The function accepts only events with the eventid passed to it at the creation.
 * @param {*} eventid
 * @param {*} actionFn
 * @returns {EventListener} function, must be registered with AppRoot
 */
const makeEventListenerFor = (eventid, actionFn) => {
  const listener = (e) => {
    console.log('listener', eventid, e);
    if (e.type === eventid) {
      actionFn(e.detail);
    }
  };
  listener.eventid = eventid;
  return listener;
};

/**
 * AppRoot renders a couple of dropdown menus.
 * The dropdownMenu2 is configured here.
 */
const dropdownMenu2 = {
  title: 'Select a form:',
  options: {
    t: 'Triangle',
    s: 'Square',
    p: 'Pentagon',
    c: 'Circle',
  },
  listener: makeEventListenerFor('menu2-event', (selected) => {
    console.log('app-root received event', selected);
    alert(
      `app-root received event ${selected} -> ${dropdownMenu2.options[selected]}`,
    );
    // other actions here
  }),
};

/**
 * This listener listens for the default <dropdown-menu> eventid, 'dropdown-menu-event'.
 * You need to register it with the AppRoot.
 * It suffices if the app instantiates only one <dropdown-menu>.
 */
const simpleMenuEventListener = (e) => {
  console.log(
    'simpleMenuEventListener event type:',
    e.type,
    'detail:',
    e.detail,
  );
  if (e === undefined) return;
  const selected = e.detail;
  alert(
    `app-root received dropdown-menu event\n  type: ${e.type}\n  detail: ${e.detail}`,
  );
  // other actions here
};

// 2 the demo application

/**
 * AppRoot demonstrates the operation of several lit components
 * <my-element>
 * <my-timer>
 * <my-clock>
 * <date-element>
 * <name-tag>
 * <todo-list>
 * <info-links>
 * <dropdown-menu>
 */
@customElement('app-root')
export class AppRoot extends LitElement {
  static get styles() {
    return css`
      :host {
        color: green;
        font-size: 1.2rem;
      }
    `;
  }

  constructor() {
    super();
    window.addEventListener('dropdown-menu-event', simpleMenuEventListener);
    window.addEventListener(dropdownMenu2.eventid, dropdownMenu2.listener);
    window.addEventListener(
      dropdownMenu2.listener.eventid,
      dropdownMenu2.listener,
    );
  }

  render() {
    return html`
      <info-links></info-links>
      A sampling of lit components:
      <hr />
      <div>
        <my-element></my-element><br />
        default property values
        <dropdown-menu id="menu1">defaults</dropdown-menu>
        property values defined in app-root
        <dropdown-menu
          id="menu2"
          eventid="${dropdownMenu2.listener.eventid}"
          .label="${dropdownMenu2.title}"
          .options=${dropdownMenu2.options}
          objectprop='{"x": "XXX"}'></dropdown-menu>
        <name-tag></name-tag>
        <todo-list> </todo-list>
        <date-element></date-element>
        <my-timer duration="7"></my-timer>
        <my-timer duration="60"></my-timer>
        <my-timer duration="300"></my-timer>
        <my-clock></my-clock>
        <hoverable-menu></hoverable-menu>
      </div>
    `;
  }
}
