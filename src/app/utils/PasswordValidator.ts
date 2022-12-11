import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(form: AbstractControl) {
    // 매개변수로 전달받은 검증대상 폼 모델에서 password와 confirmPassword를 획득
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    //password와 confirmPassword의 값을 비교한다.
    if (password !== confirmPassword) {
      //검증이 실패한 경우 , 에러 객체를 반환한다.
      return { match: { password, confirmPassword } };
    } else {
      //성공한 경우 null를 반환한다.
      return null;
    }
  }
}
