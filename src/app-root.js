import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { InfoLinks } from './components/info-links';
import { MyElement } from './components/my-element';
import { ToDoList } from './components/todo-list';
import { NameTag } from './components/name-tag';
import { DateElement } from './components/date/date-element';
import { MyTimer } from './components/timer/my-timer.js';
import { MyClock } from './components/clock/my-clock.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  static get styles() {
    return css``;
  }

  render() {
    return html`
      <info-links></info-links>
      <div>
        <my-element></my-element>
        <name-tag></name-tag>
        <todo-list> </todo-list>
        <date-element></date-element>
        <my-timer duration="7"></my-timer>
        <my-timer duration="60"></my-timer>
        <my-timer duration="300"></my-timer>
        <my-clock></my-clock>
      </div>
    `;
  }
}
