import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllBarComponent } from './controll-bar.component';
import { ControllModule } from '../controll/controll.module';
import { IconModule } from 'src/app/components/icon/icon.module';



@NgModule({
  declarations: [
    ControllBarComponent
  ],
  imports: [
    CommonModule,
    ControllModule,
    IconModule
  ],
  exports: [
    ControllBarComponent
  ]
})
export class ControllBarModule { }
