import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidate5Component } from './form-validate5.component';

describe('FormValidate5Component', () => {
  let component: FormValidate5Component;
  let fixture: ComponentFixture<FormValidate5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidate5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidate5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
