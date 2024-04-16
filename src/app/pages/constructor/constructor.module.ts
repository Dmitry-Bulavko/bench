import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorComponent } from './constructor.component';
import { ConstructorRoutingModule } from './constructor-routing.module';
import { PlaceConstructorModule } from 'src/app/libs/place-constructor/place-constructor.module';
import { LayoutsFacadeService } from 'src/app/libs/layouts/store/layouts-facade.service';
import { ELayout } from 'src/app/libs/layouts/models/layouts.enum';



@NgModule({
  declarations: [
    ConstructorComponent
  ],
  imports: [
    CommonModule,
    ConstructorRoutingModule,
    PlaceConstructorModule
  ]
})
export class ConstructorModule {
  constructor(private layoutService: LayoutsFacadeService) {
    this.layoutService.setActualLayout(ELayout.Admin)
  }
 }
