import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirLugarComponent } from './aniadir-lugar.component';

describe('AniadirLugarComponent', () => {
  let component: AniadirLugarComponent;
  let fixture: ComponentFixture<AniadirLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniadirLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
