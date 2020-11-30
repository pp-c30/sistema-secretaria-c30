import { TestBed } from '@angular/core/testing';

import { LicenciaturaService } from './licenciatura.service';

describe('LicenciaturaService', () => {
  let service: LicenciaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenciaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
