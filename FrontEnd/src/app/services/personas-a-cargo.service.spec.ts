import { TestBed } from '@angular/core/testing';

import { Personas_acargoService } from './personas-a-cargo.service';

describe('Personas_acargoService', () => {
  let service: Personas_acargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personas_acargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
