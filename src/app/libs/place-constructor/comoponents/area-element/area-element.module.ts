import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaElementComponent } from './area-element.component';
import { SafeHTMLPipeModule } from 'src/app/pipes/safe-html/safe-html.module';



@NgModule({
  declarations: [
    AreaElementComponent
  ],
  imports: [
    CommonModule,
    SafeHTMLPipeModule
  ],
  exports: [
    AreaElementComponent
  ]
})
export class AreaElementModule { }
