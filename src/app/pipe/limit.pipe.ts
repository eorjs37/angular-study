import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../component/todo/todo.component';
@Pipe({
  name: 'limit',
})
export class LimitPipe implements PipeTransform {
  transform(todos: Todo[], limit: number): Todo[] {
    return todos.filter((el, i) => i < limit);
  }
}
