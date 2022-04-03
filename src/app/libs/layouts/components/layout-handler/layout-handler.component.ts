import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ELayout } from '../../models/layouts.enum';
import { LayoutsFacadeService } from '../../store/layouts-facade.service';

@Component({
  selector: 'bench-layout-handler',
  templateUrl: './layout-handler.component.html',
  styleUrls: ['./layout-handler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHandlerComponent{
  public $layout: Observable<ELayout> = this.layoutService.actualLayout$;
  
  public LayoutType: typeof ELayout = ELayout;

  constructor(
    private layoutService: LayoutsFacadeService
  ) { }
}
