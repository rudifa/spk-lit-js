import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { InfoLinks } from './components/info-links';
import { MyElement } from './components/my-element';
import { ToDoList } from './components/todo-list';

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
        <todo-list> </todo-list>
      </div>
    `;
  }
}
