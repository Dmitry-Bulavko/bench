import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { PlaceAreaModule } from '../place-area/place-area.module';
import { ControllBarModule } from '../controll-bar/controll-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { IconModule } from 'src/app/components/icon/icon.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { HeaderControlsModule } from '../header-controls/header-controls.module';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    PlaceAreaModule,
    ControllBarModule,
    FormsModule,
    ReactiveFormsModule,
    LogoModule,
    IconModule,
    SelectModule,
    ButtonModule,
    HeaderControlsModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
