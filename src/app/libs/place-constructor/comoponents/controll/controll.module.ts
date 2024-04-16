import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllComponent } from './controll.component';
import { SafeHTMLPipeModule } from 'src/app/pipes/safe-html/safe-html.module';



@NgModule({
  declarations: [
    ControllComponent
  ],
  imports: [
    CommonModule,
    SafeHTMLPipeModule
  ],
  exports: [
    ControllComponent
  ]
})
export class ControllModule { }
