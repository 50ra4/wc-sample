import { ReactiveController, ReactiveControllerHost } from 'lit';

type Todo = {
  id: string;
  completed: boolean;
  text: string;
  createdAt: number;
};

// const createId = () => `${new Date().getTime() * Math.random()}`;

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
  public restoreTodoList(key: string) {}

  /**
   * TodoをlocalStorageに保存する
   */
  public saveTodoList(key: string) {}

  /**
   * Todoを新しく追加する
   */
  public createTodo(text: string) {}

  /**
   * Todoを完了/未完了に切り替える
   */
  public toggleTodoCompleted(id: string) {}

  /**
   * Todoを全て削除する
   */
  public clearTodoList() {}
}
