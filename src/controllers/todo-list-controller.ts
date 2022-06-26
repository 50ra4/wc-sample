import { ReactiveController, ReactiveControllerHost } from 'lit';

type Todo = {
  id: string;
  completed: boolean;
  text: string;
  createdAt: number;
};

const createId = () => `${new Date().getTime() * Math.random()}`;

export class TodoListController implements ReactiveController {
  private _data: Todo[] = [];

  /**
   * Todoリストの一覧
   */
  get data(): Todo[] {
    return this._data;
  }

  constructor(public readonly host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {}

  /**
   * TodoをlocalStorageから復元する
   */
  public restoreTodoList(key: string) {
    this._data = [...(JSON.parse(window.localStorage.getItem(key) ?? '[]') as Todo[])];
  }

  /**
   * TodoをlocalStorageに保存する
   */
  public saveTodoList(key: string) {
    window.localStorage.setItem(key, JSON.stringify(this.data));
    window.alert('completed to save.');
  }

  /**
   * Todoを新しく追加する
   */
  public createTodo(text: string) {
    this._data = [
      ...this._data,
      { id: createId(), text: text, completed: false, createdAt: new Date().getTime() },
    ];
  }

  /**
   * Todoを完了/未完了に切り替える
   */
  public toggleTodoCompleted(id: string) {
    this._data = this.data.map((todo) =>
      todo.id !== id ? todo : { ...todo, completed: !todo.completed },
    );
  }

  /**
   * Todoを全て削除する
   */
  public clearTodoList() {
    this._data = [];
  }
}
