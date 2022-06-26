import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TodoListController } from '../controllers/todo-list-controller';
import { RESET_CSS } from '../styles';

/**
 * todo-list
 * @slot なし
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
   * 完了したTodoを非表示にするか
   */
  @state()
  private hideCompleted = false;

  /**
   * 入力中のTodoのテキスト
   */
  @state()
  private text = '';

  private todoList = new TodoListController(this);

  override connectedCallback() {
    super.connectedCallback();
    if (!this.storageKey) {
      throw Error('storageKey property is required.');
    }
    this.todoList.restoreTodoList(this.storageKey);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
  }

  override render() {
    const items = !this.hideCompleted
      ? this.todoList.data
      : this.todoList.data.filter(({ completed }) => !completed);

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
        <button @click=${this.saveTodoList} ?disabled=${!this.todoList.data.length}>Save</button>
        <button
          class="clear-button"
          @click=${this.clearTodoList}
          ?disabled=${!this.todoList.data.length}
        >
          Clear
        </button>
      </div>
    </section>`;
  }

  /**
   * 完了したタスクを非表示にするかを切り替える
   */
  private toggleHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  /**
   * inputのテキストを反映する
   */
  private changeText(e: Event) {
    this.text = (e.target as HTMLInputElement).value;
  }

  /**
   * Todoを新しく追加する
   */
  private createTodo() {
    this.todoList.createTodo(this.text);
    this.text = '';
  }

  /**
   * Todoを完了/未完了に切り替える
   */
  private toggleTodo(id: string) {
    this.todoList.toggleTodoCompleted(id);
  }

  /**
   * TodoをlocalStorageに保存する
   */
  private saveTodoList() {
    if (!this.storageKey) {
      throw Error('storageKey property is required.');
    }
    this.todoList.saveTodoList(this.storageKey);
  }

  /**
   * 表示しているTodoを全て削除する
   */
  private clearTodoList() {
    this.todoList.clearTodoList();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list': TodoList;
  }
}
