import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Personas_acargoComponent } from './personas-a-cargo.component';

describe('PersonasACargoComponent', () => {
  let component: Personas_acargoComponent;
  let fixture: ComponentFixture<Personas_acargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Personas_acargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Personas_acargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
