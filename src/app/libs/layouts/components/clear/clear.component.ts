import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bench-layout-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
