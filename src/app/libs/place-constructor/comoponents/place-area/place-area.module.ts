import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceAreaComponent } from './place-area.component';
import { AreaElementModule } from '../area-element/area-element.module';
import { DragDropModule } from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    PlaceAreaComponent
  ],
  imports: [
    CommonModule,
    AreaElementModule,
    DragDropModule
  ],
  exports: [
    PlaceAreaComponent
  ]
})
export class PlaceAreaModule { }
