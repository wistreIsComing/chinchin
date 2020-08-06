import { TestBed } from '@angular/core/testing';

import { SecureRoutesGuard } from './secure-routes.guard';

describe('SecureRoutesGuard', () => {
  let guard: SecureRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecureRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
