import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllComponent } from './controll.component';

describe('ControllComponent', () => {
  let component: ControllComponent;
  let fixture: ComponentFixture<ControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
