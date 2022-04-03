import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ELayout } from 'src/app/libs/layouts/models/layouts.enum';
import { LayoutsFacadeService } from 'src/app/libs/layouts/store/layouts-facade.service';

@Component({
  selector: 'bench-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private layoutService: LayoutsFacadeService) { }

  ngOnInit(): void {
    this.layoutService.setActualLayout(ELayout.Public)
    console.log('i am alive')
  }

}
