import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false },
  ];
  constructor() {}

  ngOnInit(): void {}

  add(content: string) {
    this.todos = [
      ...this.todos,
      { id: this.getNextId(), content, completed: false },
    ];
  }

  complete(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  private getNextId(): number {
    return !this.todos.length
      ? 1
      : Math.max(...this.todos.map(({ id }) => id)) + 1;
  }
}
