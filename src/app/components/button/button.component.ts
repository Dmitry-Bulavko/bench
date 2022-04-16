import { Component, Input, OnInit } from '@angular/core';
import { EButtonType } from './models/button-type.enum';

@Component({
  selector: 'bench-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  public type: EButtonType = EButtonType.Fill;

  public buttonType: typeof EButtonType = EButtonType;
  constructor() { }

  ngOnInit(): void {
  }

}
