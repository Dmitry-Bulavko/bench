import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EButtonType } from '../button/models/button-type.enum';
import { ECostRating, IPlaceCard } from './place-card.model';

@Component({
  selector: 'bench-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent implements OnInit {
  @Input()
  set data(card: IPlaceCard) {
    this.id = card.id;
    this.name = card.name;
    this.rating = card.rating;
    this.costRating = card.costRating;
    this.address = card.address;
    this.kitchenList = card.kitchenList;
    this.avaliableStatus = card.avaliableStatus;
    this.image = card.image;
    this.placeType = card.placeType;
    this.link = [`place/${card.id}`];
  }

  public link: string[];
  public id!: string;
  public name!: string;
  public rating!: number;
  public costRating!: ECostRating;
  public address!: string;
  public kitchenList!: string[];
  public avaliableStatus!: string;
  public image!: string;
  public placeType!: string;

  public buttonType: typeof EButtonType = EButtonType;
  constructor() { }

  ngOnInit(): void {
  }

}
