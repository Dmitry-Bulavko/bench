import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITabs } from './tabs.model';

@Component({
  selector: 'bench-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  @Input()
  public tabs: ITabs = []

  constructor() { }

  ngOnInit(): void {
  }

}
