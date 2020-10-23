import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignacionComponent } from './designacion.component';

describe('DesignacionComponent', () => {
  let component: DesignacionComponent;
  let fixture: ComponentFixture<DesignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
