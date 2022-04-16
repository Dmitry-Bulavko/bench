import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlacePageRoutingModule } from './place-page-routing.module';



@NgModule({
  declarations: [
    PlaceComponent
  ],
  imports: [
    CommonModule,
    PlacePageRoutingModule
  ],
  exports: [
    PlaceComponent
  ]
})
export class PlacePageModule { }
