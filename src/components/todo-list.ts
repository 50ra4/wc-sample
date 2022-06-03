import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { RESET_CSS } from '../styles';

type Todo = {
  id: string;
  completed: boolean;
  text: string;
  createdAt: number;
};

const createId = () => `${new Date().getTime() * Math.random()}`;

/**
 * todo-list
 */
@customElement('todo-list')
export class TodoList extends LitElement {
  static override styles = [
    ...RESET_CSS,
    css`
      :host {
        display: block;
        border: 1px solid #888888;
        background-color: #e8eaed;
        padding: 16px;
        max-width: 800px;
      }

      button {
        min-width: 120px;
        height: 36px;
        font-size: 12px;
        font-weight: bold;
        padding: 0 8px;
        color: #ffffff;
        background-color: #000000;
      }
      button:disabled {
        background-color: #686868;
        cursor: default;
      }

      .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .input-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .todo-input {
        flex: 1 1 auto;
        height: 36px;
        padding: 0 4px;
      }

      .todo-list {
        margin: 8px;
      }
      .todo-list-item {
        list-style: inside;
        cursor: pointer;
      }
      .completed {
        text-decoration-line: line-through;
        color: #777777;
      }
      input[type='checkbox'] {
        appearance: auto;
      }

      .bottom-wrapper {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .clear-button {
        background-color: #c62828;
        color: #fafafa;
      }
    `,
  ];

  /**
   * localStorageのkeyを指定する
   */
  @property({ type: String })
  storageKey = '';

  /**
   * titleを指定する
   */
  @property({ type: String, attribute: 'title' })
  heading = '';

  /**
   * Todoリストの一覧
   */
  @state()
  private todoList: Todo[] = [];

  /**
   * 完了したタスクを非表示にするフラグ
   */
  @state()
  private hideCompleted = false;

  /**
   * 追加するタスクのテキスト
   */
  @state()
  private text = '';

  override connectedCallback() {
    super.connectedCallback();
    if (!this.storageKey) {
      throw Error('storageKey property is required.');
    }
    this.todoList = JSON.parse(window.localStorage.getItem(this.storageKey) ?? '[]') as Todo[];
    this.requestUpdate();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
  }

  override render() {
    const items = !this.hideCompleted
      ? this.todoList
      : this.todoList.filter(({ completed }) => !completed);

    return html`<section>
      <h3 class="title">${this.heading}</h3>
      <div class="input-wrapper">
        <input
          class="todo-input"
          type="text"
          .value=${this.text}
          @input=${this.changeText}
          placeholder="please input task."
        />
        <button @click=${this.createTodo} ?disabled=${!this.text.length}>Add</button>
      </div>
      <ul class="todo-list">
        ${items.map(
          ({ id, text, completed }) =>
            html`
              <li
                class=${completed ? 'todo-list-item completed' : 'todo-list-item'}
                @click=${() => this.toggleTodo(id)}
              >
                ${text}
              </li>
            `,
        )}
      </ul>
      <label for="hide-completed-checkbox">
        <input
          type="checkbox"
          id="hide-completed-checkbox"
          @change=${this.toggleHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
      <div class="bottom-wrapper">
        <button @click=${this.saveTodoList} ?disabled=${!this.todoList.length}>Save</button>
        <button
          class="clear-button"
          @click=${this.clearTodoList}
          ?disabled=${!this.todoList.length}
        >
          Clear
        </button>
      </div>
    </section>`;
  }

  private toggleHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
    this.requestUpdate();
  }

  private changeText(e: Event) {
    this.text = (e.target as HTMLInputElement).value;
    this.requestUpdate();
  }

  private createTodo() {
    this.todoList = [
      ...this.todoList,
      { id: createId(), text: this.text, completed: false, createdAt: new Date().getTime() },
    ];
    this.text = '';
  }

  private toggleTodo(id: string) {
    this.todoList = this.todoList.map((todo) =>
      todo.id !== id ? todo : { ...todo, completed: !todo.completed },
    );
    this.requestUpdate();
  }

  private saveTodoList() {
    if (!this.storageKey) {
      throw Error('storageKey property is required.');
    }
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
    window.alert('completed to save.');
  }

  private clearTodoList() {
    this.todoList = [];
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list': TodoList;
  }
}
