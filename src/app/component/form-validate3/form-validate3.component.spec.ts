import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidate3Component } from './form-validate3.component';

describe('FormValidate3Component', () => {
  let component: FormValidate3Component;
  let fixture: ComponentFixture<FormValidate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidate3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
