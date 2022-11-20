import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Greeting2Service {
  constructor() {}

  sayHi() {
    return 'Hi!';
  }
}
