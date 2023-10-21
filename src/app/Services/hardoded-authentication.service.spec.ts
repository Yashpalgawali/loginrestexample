import { TestBed } from '@angular/core/testing';

import { HardodedAuthenticationService } from './hardoded-authentication.service';

describe('HardodedAuthenticationService', () => {
  let service: HardodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
