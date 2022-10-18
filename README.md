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
