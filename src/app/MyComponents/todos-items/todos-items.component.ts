import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css'],
})
export class TodosItemsComponent {
  @Input() todo: Todo = { sno: 0, title: '', desc: '', isActive: false };
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('clicked');
  }
  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(todo)
    console.log(todo);
  }
}
