import { Component, Input, OnInit } from '@angular/core';
import { ETabType, ITab } from '../tabs.model';

@Component({
  selector: 'bench-tabs-item',
  templateUrl: './tabs-item.component.html',
  styleUrls: ['./tabs-item.component.scss']
})
export class TabsItemComponent implements OnInit {
  @Input()
  public data: ITab | undefined;

  public tabType: typeof ETabType = ETabType;

  constructor() { }

  ngOnInit(): void {
  }

}
