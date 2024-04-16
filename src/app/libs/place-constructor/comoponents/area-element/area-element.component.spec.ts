import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaElementComponent } from './area-element.component';

describe('AreaElementComponent', () => {
  let component: AreaElementComponent;
  let fixture: ComponentFixture<AreaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
