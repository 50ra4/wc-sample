import { ReactiveController, ReactiveControllerHost } from 'lit';

export class TodoListController implements ReactiveController {
  constructor(public readonly host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {}
}
