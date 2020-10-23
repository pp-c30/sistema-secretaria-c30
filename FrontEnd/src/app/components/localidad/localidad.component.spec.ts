import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadComponent } from './localidad.component';

describe('LocalidadComponent', () => {
  let component: LocalidadComponent;
  let fixture: ComponentFixture<LocalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
