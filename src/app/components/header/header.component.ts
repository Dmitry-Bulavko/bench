import { Component, OnInit } from '@angular/core';
import { ETabType, ITabs } from '../tabs/tabs.model';

@Component({
  selector: 'bench-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public tabsObj: ITabs = [
    {
      type: ETabType.link,
      value: 'Заведения',
      href: 'places'
    },
    {
      type: ETabType.link,
      value: 'Новости',
      href: 'news'
    },
    {
      type: ETabType.link,
      value: 'Партнерам',
      href: '/partners'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
