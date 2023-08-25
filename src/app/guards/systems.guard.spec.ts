import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { systemsGuard } from './systems.guard';

describe('systemsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => systemsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
