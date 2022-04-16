import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceCardComponent } from './place-card.component';
import { ButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlaceCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    PlaceCardComponent
  ]
})
export class PlaceCardModule { }
