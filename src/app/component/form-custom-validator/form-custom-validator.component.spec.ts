import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomValidatorComponent } from './form-custom-validator.component';

describe('FormCustomValidatorComponent', () => {
  let component: FormCustomValidatorComponent;
  let fixture: ComponentFixture<FormCustomValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCustomValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
