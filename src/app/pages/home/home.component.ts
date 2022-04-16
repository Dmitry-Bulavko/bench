import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ECostRating, IPlaceCard } from 'src/app/components/place-card/place-card.model';
import { ELayout } from 'src/app/libs/layouts/models/layouts.enum';
import { LayoutsFacadeService } from 'src/app/libs/layouts/store/layouts-facade.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'bench-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public cards$: Observable<IPlaceCard[]> = this.placesService.getAllPlaces();

  constructor(
    private layoutService: LayoutsFacadeService,
    private placesService: PlacesService
  ) { }

  ngOnInit(): void {
    this.layoutService.setActualLayout(ELayout.Public);
  }

}
