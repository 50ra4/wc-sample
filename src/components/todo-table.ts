import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TodoListController } from '../controllers/todo-list-controller';
import { RESET_CSS } from '../styles';

const toDateString = (date: Date): string => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

/**
 * todo-table
 * @slot なし
 */
@customElement('todo-table')
export class TodoTable extends LitElement {
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

      .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      td:nth-of-type(2),
      th:nth-of-type(2) {
        width: 50px;
        text-align: center;
      }
      td:nth-of-type(3),
      th:nth-of-type(3) {
        width: 190px;
      }

      th {
        text-align: center !important;
      }
      td {
        padding: 0 4px;
      }

      table,
      th,
      td {
        border: 1px solid #000000;
      }
      thead {
        color: #ffffff;
        background-color: #000000;
      }
      table {
        table-layout: auto;
        width: 100%;
        background-color: #ffffff;
      }

      .bottom-wrapper {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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

  @state()
  lastUpdatedAt = new Date();

  private todoList = new TodoListController(this);

  override connectedCallback() {
    super.connectedCallback();
    this.updateTodoList();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
  }

  override render() {
    const items = this.todoList.data;
    const updatedAt = toDateString(this.lastUpdatedAt);

    return html`<section>
      <h3 class="title">${this.heading}</h3>
      <table>
        <thead>
          <tr>
            <th>タスク</th>
            <th>完了</th>
            <th>作成日時</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(
            ({ text, completed, createdAt }) =>
              html`
                <tr>
                  <td>${text}</td>
                  <td>${completed ? 'x' : ''}</td>
                  <td>${toDateString(new Date(createdAt))}</td>
                </tr>
              `,
          )}
        </tbody>
      </table>
      <div class="bottom-wrapper">
        <button @click=${this.onClickUpdate}>Update</button>
        <div>更新日時: ${updatedAt}</div>
      </div>
    </section>`;
  }

  private updateTodoList() {
    if (!this.storageKey) {
      throw Error('storageKey property is required.');
    }
    this.lastUpdatedAt = new Date();
    this.todoList.restoreTodoList(this.storageKey);
  }

  private onClickUpdate() {
    this.updateTodoList();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-table': TodoTable;
  }
}
