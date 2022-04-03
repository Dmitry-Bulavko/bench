import { Component, OnInit } from '@angular/core';
import { ELayout } from 'src/app/libs/layouts/models/layouts.enum';
import { LayoutsFacadeService } from 'src/app/libs/layouts/store/layouts-facade.service';
import { ETabType, ITabs } from '../tabs/tabs.model';

@Component({
  selector: 'bench-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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
      href: 'partners'
    },
  ];
}
