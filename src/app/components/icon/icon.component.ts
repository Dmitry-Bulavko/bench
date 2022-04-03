import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bench-icon',
  templateUrl: './icon.component.svg',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  public iconId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
