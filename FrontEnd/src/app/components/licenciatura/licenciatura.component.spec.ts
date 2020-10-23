import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaturaComponent } from './licenciatura.component';

describe('LicenciaturaComponent', () => {
  let component: LicenciaturaComponent;
  let fixture: ComponentFixture<LicenciaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenciaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
