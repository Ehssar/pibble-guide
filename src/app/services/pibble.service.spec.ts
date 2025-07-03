import { TestBed } from '@angular/core/testing';

import { PibbleService } from './pibble.service';

describe('PibbleService', () => {
  let service: PibbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PibbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
