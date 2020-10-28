import { TestBed } from '@angular/core/testing';

import { AsignaturaService } from './localidad.service';

describe('LocalidadService', () => {
  let service: AsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});