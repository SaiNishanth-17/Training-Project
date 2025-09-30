import { TestBed } from '@angular/core/testing';

import { UserRegisteringService } from './user-registering-service';

describe('UserRegisteringService', () => {
  let service: UserRegisteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
