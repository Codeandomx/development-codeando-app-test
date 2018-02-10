import { TestBed, inject } from '@angular/core/testing';

import { AuthSafeService } from './auth-safe.service';

describe('AuthSafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSafeService]
    });
  });

  it('should ...', inject([AuthSafeService], (service: AuthSafeService) => {
    expect(service).toBeTruthy();
  }));
});
