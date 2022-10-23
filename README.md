# Angular Study

## 프로퍼티 바인딩

> 컴퍼넌트 클래스와 프로퍼티와 템플릿 간의 단방향 데이터 바인딩

```html
<element [property]="expression">...</element>
```

## 어트리뷰트 바인딩

> 컴퍼넌트 클래스와 프로퍼티와 템플릿 간의 단방향 데이터 바인딩이지만, 초기값 세팅만 가능하고 값을 변경하면 변경되지 않음.

```html
<element [attr.attribute-name]="expression">...</element>
```

## 클래스 바인딩

> HTML 요소의 class 어트리뷰트에 클래스 추가/삭제 가능

```html
<element [class.alert]="isError"></element>
```

## 스타일 바인딩

> 스타일 바인딩을 사용하면 HTML 요소의 style 어트리뷰트에 스타일 지정 가능  
> 스타일 표기법은 케밥 또는 카멜표기법 사용한다.

```html
<element [style.style-property]="expression"></element>
```

## 디렉티브

> DOM의 모든것(모양이나 동작)을 관리하기 위한 지시어다.

## @Input

> 부모 컴퍼넌트에서 자식 컴퍼넌트한데 데이터 전달시 사용된다.

### 부모컴퍼넌트

#### typescript(app.component.ts)

```typescript
import { Component } from "@angular/core";
import { User } from "./models/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  //자식 컴퍼넌트와 공유할 상태정보
  users: User[];

  constructor() {
    this.users = [
      new User(1, "Lee", "Administrator"),
      new User(2, "Baek", "Developer"),
      new User(3, "Park", "Designer"),
    ];
  }
}
```

#### html (app.component)

```html javascript angular
<!-- 부모 컴퍼넌트 -->
<div class="container">
  <!-- 자식 컴퍼넌트 선언 -->
  <app-user-list [users]="users"></app-user-list>
</div>
```

### 자식컴퍼넌트

#### typescript(app.component.ts)

```typescript
import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  private _users: User[] = [];

  //역할별 사용자 카운터
  cntAdmin: number | undefined;
  cntDeveloper: number | undefined;
  cntDesigner: number | undefined;
  //set을 통해 데이터 바인딩할때마다 관련 데이터들을 변경해준다.
  @Input()
  set users(users: User[]) {
    if (!users) {
      return;
    }

    this.cntAdmin = users.filter(({ role }) => role === "Administrator").length;
    this.cntDeveloper = users.filter(({ role }) => role === "Developer").length;
    this.cntDesigner = users.filter(({ role }) => role === "Designer").length;

    this._users = users;
  }
  get users(): User[] {
    return this._users;
  }
}
```

#### html(user-list.component.html)

```html
<table class="table">
  <thead>
    <tr>
      <th>No.</th>
      <th>ID</th>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of users; let i = index">
      <td>{{ i + 1 }}</td>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.role }}</td>
    </tr>
  </tbody>
</table>

<div class="panel panel-default">
  <div class="panel-body">
    <p>Admin : {{ cntAdmin }}</p>
    <p>Developer : {{ cntDeveloper }}</p>
    <p>Designer : {{ cntDesigner }}</p>
  </div>
</div>
```

## @ViewChild

> 자식 컴퍼넌트에 접근하고 싶을때 사용된다.

### 자식 컴퍼넌트(child.component.html)

#### HTML

```html
<div class="par" *ngIf="isShow">{{ contextText }}</div>
```

#### typescript

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit {
  //부모컴퍼넌트가 자식 컴퍼넌트이 뷰를 감추거나 보이기 위해 접근할 프로퍼티
  public isShow = true;
  contextText = "Child";

  constructor() {}

  ngOnInit(): void {}

  changeText(text: string) {
    this.contextText = text;
  }
}
```

### 부모 컴퍼넌트(app.component.html)

#### HTML

```html
<button type="button" (click)="toggle()">Toggle Child</button>
<button type="button" (click)="changeText()">Change Child`s text</button>
<app-child></app-child>
```

#### typescript

```typescript
import { ChildComponent } from "./component/child/child.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(ChildComponent) myChild: ChildComponent | undefined;
  toggle() {
    if (this.myChild != undefined) {
      this.myChild.isShow = !this.myChild.isShow;
    }
  }

  changeText() {
    if (this.myChild != undefined) {
      this.myChild.contextText = "hello world";
    }
  }
}
```

## @ViewChildren

> 자식컴퍼넌트를 제어하고 싶을때인 것은 @ViewChild이랑 똑같지만  
> 여러개로 관리 하고 싶을때 사용된다.

### 자식 컴퍼넌트(child2.component.html)

#### HTML

```html
<input type="checkbox" [id]="checkBox?.id" [checked]="checkBox?.checked" />
<label [for]="checkBox?.id"> {{ checkBox?.label }} </label>
```

#### typescript

```typescript
import { Component, Input, OnInit } from "@angular/core";

import { Checkbox } from "../../app.component";
@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.scss"],
})
export class Child2Component implements OnInit {
  @Input() checkBox: Checkbox | undefined;

  constructor() {}

  ngOnInit(): void {}
}
```

### 부모 컴퍼넌트(app.component.html)

#### HTML

```html
<div class="container">
  <h3>Parent</h3>
  <button type="button" (click)="toggle2()">Toggle Child</button>
  <div *ngFor="let checkbox of checkboxs">
    <app-child2 [checkBox]="checkbox"></app-child2>
  </div>
</div>
```

#### typescript

```typescript
import { Component, QueryList, ViewChildren } from "@angular/core";
import { Child2Component } from "./component/child2/child2.component";

export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  checkboxs: Checkbox[] = [
    { id: 1, label: "HTML", checked: true },
    { id: 2, label: "CSS", checked: false },
    { id: 3, label: "Javascript", checked: false },
  ];
  active = false;
  @ViewChild(ChildComponent) myChild: ChildComponent | undefined;

  toggle2() {
    this.active = !this.active;

    this.myChildren?.forEach((child) => {
      if (child.checkBox != undefined) {
        child.checkBox.checked = this.active;
      }
    });
  }
}
```

## ng-content

> vue에서의 slot와 같으며 추상적으로 개발할때 많이 쓰인다. 보통 css가 같으나, 안의 내용물(텍스트)가 다를때 자주 쓰인다. 이렇게 개발할 경우 재활용성이 높다.

#### ng-content 컴퍼넌트(multi-content-projection.component.html)

```html
<h3>Multi-slot content projection</h3>

<!-- select="태그 또는 css class" -->
<ng-content select="header"></ng-content>
<ng-content select="section"></ng-content>
<ng-content select=".my-class"></ng-content>
<ng-content select="footer"></ng-content>
```

#### 부모컴퍼넌트 (app.component.html)

```html
<app-multi-content-projection>
  <header>header</header>
  <footer>footer content</footer>
  <section>section</section>
  <div class="my-class">my class div</div>
</app-multi-content-projection>
```
