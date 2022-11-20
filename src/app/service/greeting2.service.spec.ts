import { TestBed } from '@angular/core/testing';

import { Greeting2Service } from './greeting2.service';

describe('Greeting2Service', () => {
  let service: Greeting2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Greeting2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
