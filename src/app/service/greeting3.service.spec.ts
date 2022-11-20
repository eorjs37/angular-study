import { TestBed } from '@angular/core/testing';

import { Greeting3Service } from './greeting3.service';

describe('Greeting3Service', () => {
  let service: Greeting3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Greeting3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
