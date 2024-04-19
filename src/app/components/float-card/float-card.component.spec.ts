import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatCardComponent } from './float-card.component';

describe('FloatCardComponent', () => {
  let component: FloatCardComponent;
  let fixture: ComponentFixture<FloatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
