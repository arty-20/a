import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAgenciaComponent } from './inicio-agencia.component';

describe('InicioAgenciaComponent', () => {
  let component: InicioAgenciaComponent;
  let fixture: ComponentFixture<InicioAgenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAgenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
