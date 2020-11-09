import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasACargoComponent } from './personas-a-cargo.component';

describe('PersonasACargoComponent', () => {
  let component: PersonasACargoComponent;
  let fixture: ComponentFixture<PersonasACargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasACargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasACargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
