import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutModule } from './comoponents/main-layout/main-layout.module';
import { ControllModule } from './comoponents/controll/controll.module';
import { ControllBarModule } from './comoponents/controll-bar/controll-bar.module';
import { PlaceAreaModule } from './comoponents/place-area/place-area.module';
import { PlaceConstructorStoreModule } from './store/module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayoutModule,
    ControllModule,
    ControllBarModule,
    PlaceAreaModule,
    PlaceConstructorStoreModule
  ],
  exports: [
    MainLayoutModule,
    // ControllModule,
    // ControllBarModule,
    // PlaceAreaModule
  ]
})
export class PlaceConstructorModule { }
