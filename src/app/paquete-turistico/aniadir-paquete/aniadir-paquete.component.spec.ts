import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirPaqueteComponent } from './aniadir-paquete.component';

describe('AniadirPaqueteComponent', () => {
  let component: AniadirPaqueteComponent;
  let fixture: ComponentFixture<AniadirPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniadirPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
