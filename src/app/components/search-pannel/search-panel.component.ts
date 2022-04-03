import { Component, OnInit } from '@angular/core';
import { ISelect } from '../select/select.model';

@Component({
  selector: 'bench-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  public filters: ISelect[] = [
    {
      value: 'mogilev',
      icon: 'map-marker',
      options: {
        brest: 'Брест',
        gomel: 'Гомель',
        grodno: 'Гродно',
        vitebsk: 'Витебск',
        mogilev: 'Могилев',
        minsk: 'Минск',
      }
    },
    {
      value: 'today',
      icon: 'calendar',
      options: {
        today: 'Сегодня',
        tomorrow: 'Завтра',
        dayAfterTommorow: 'Послезавтра',
      }
    },
    {
      value: '16:00',
      icon: 'clock',
      options: {
        '16:00': '16:00',
        '17:00': '17:00',
        '18:00': '18:00',
        '19:00': '19:00',
        '20:00': '20:00',
        '21:00': '21:00',
      }
    },
    {
      value: '1',
      icon: 'user',
      options: {
        '1': '1 Человек',
        '2': '2 Человека',
        '3': '3 Человека',
        '4': '4 Человека',
        '5': '5 Человек',
        '6': '6 Человек',
      }
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
