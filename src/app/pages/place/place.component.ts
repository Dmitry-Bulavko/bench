import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlaceCard } from 'src/app/components/place-card/place-card.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'bench-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  public place!: IPlaceCard

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .paramMap
      .subscribe(params => {
        console.log(params.get('id'))
        
        this.placesService
          .getPlaceById(params.get('id'))
          .subscribe(place => this.place = place)
      })
  }

}
