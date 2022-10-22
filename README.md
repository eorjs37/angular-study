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
