import { Component, OnInit } from '@angular/core';
import { ELayout } from '../../models/layouts.enum';

@Component({
  selector: 'bench-layout-handler',
  templateUrl: './layout-handler.component.html',
  styleUrls: ['./layout-handler.component.scss']
})
export class LayoutHandlerComponent implements OnInit {
  public layout: ELayout = ELayout.Public;
  
  public LayoutType: typeof ELayout = ELayout;

  constructor() { }

  ngOnInit(): void {
  }

  
}
