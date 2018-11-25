import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCronogramaComponent } from './agregar-cronograma.component';

describe('AgregarCronogramaComponent', () => {
  let component: AgregarCronogramaComponent;
  let fixture: ComponentFixture<AgregarCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
