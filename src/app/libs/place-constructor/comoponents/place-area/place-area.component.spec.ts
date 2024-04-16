import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAreaComponent } from './place-area.component';

describe('PlaceAreaComponent', () => {
  let component: PlaceAreaComponent;
  let fixture: ComponentFixture<PlaceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
