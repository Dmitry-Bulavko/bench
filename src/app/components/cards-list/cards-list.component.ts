import { Component, Input, OnInit } from '@angular/core';
import { IPlaceCard } from '../place-card/place-card.model';

@Component({
  selector: 'bench-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input()
  set data(cards: IPlaceCard[] | any[]) {
    this.cards = cards;
  };

  public cards!: IPlaceCard[];
  constructor() { }

  ngOnInit(): void {
  }

}
