import { LitElement, html, css } from 'lit';

// source: https://lit.dev/tutorial/#08-finishing-touches

export class ToDoList extends LitElement {
  static properties = {
    listItems: { attribute: false },
    hideCompleted: {},
  };
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
    .wrap {
      color: #00f;
      border: 1px solid #00f;
      font-size: 1.2rem;
      padding: 10px;
    }
    input,
    button {
      font-size: 1rem;
    }
  `;

  constructor() {
    super();
    this.listItems = [
      { text: 'Make to-do list', completed: true },
      { text: 'Complete Lit tutorial', completed: false },
    ];
    this.hideCompleted = false;
  }

  render() {
    const items = this.hideCompleted
      ? this.listItems.filter((item) => !item.completed)
      : this.listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) => html` <li
            class=${item.completed ? 'completed' : ''}
            @click=${() => this.toggleCompleted(item)}>
            ${item.text}
          </li>`,
        )}
      </ul>
    `;
    const caughtUpMessage = html` <p>You're all caught up!</p> `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <div class="wrap">
        <h2>To Do</h2>
        ${todosOrMessage}
        <input id="newitem" aria-label="New item" />
        <button @click=${this.addToDo}>Add</button>
        <br />
        <label>
          <input
            type="checkbox"
            @change=${this.setHideCompleted}
            ?checked=${this.hideCompleted} />
          Hide completed
        </label>
        </p> 
      </div>
    `;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    this.listItems.push({ text: this.input.value, completed: false });
    this.input.value = '';
    this.requestUpdate();
  }
}
customElements.define('todo-list', ToDoList);
