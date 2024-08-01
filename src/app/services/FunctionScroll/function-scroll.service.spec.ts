import { TestBed } from '@angular/core/testing';

import { FunctionScrollService } from './function-scroll.service';

describe('FunctionScrollService', () => {
  let service: FunctionScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
