import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContentProjectionComponent } from './single-content-projection.component';

describe('SingleContentProjectionComponent', () => {
  let component: SingleContentProjectionComponent;
  let fixture: ComponentFixture<SingleContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleContentProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
