import { TestBed } from '@angular/core/testing';

import { RetrivePolicyService } from './retrive-policy.service';

describe('RetrivePolicyService', () => {
  let service: RetrivePolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrivePolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
