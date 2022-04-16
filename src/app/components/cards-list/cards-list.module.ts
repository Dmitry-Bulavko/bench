import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list.component';
import { PlaceCardModule } from '../place-card/place-card.module';



@NgModule({
  declarations: [
    CardsListComponent
  ],
  imports: [
    CommonModule,
    PlaceCardModule
  ],
  exports: [
    CardsListComponent
  ]
})
export class CardsListModule { }
