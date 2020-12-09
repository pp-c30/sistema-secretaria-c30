import { TestBed } from '@angular/core/testing';
import { DesignacionService } from './designacion.service';

describe('DesignacionService', () => {
  let service: DesignacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
