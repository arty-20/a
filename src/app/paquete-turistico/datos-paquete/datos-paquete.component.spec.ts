import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPaqueteComponent } from './datos-paquete.component';

describe('DatosPaqueteComponent', () => {
  let component: DatosPaqueteComponent;
  let fixture: ComponentFixture<DatosPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
