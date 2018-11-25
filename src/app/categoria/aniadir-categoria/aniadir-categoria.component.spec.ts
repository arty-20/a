import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirCategoriaComponent } from './aniadir-categoria.component';

describe('AniadirCategoriaComponent', () => {
  let component: AniadirCategoriaComponent;
  let fixture: ComponentFixture<AniadirCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniadirCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
