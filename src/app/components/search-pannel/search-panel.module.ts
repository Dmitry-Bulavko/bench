import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './search-panel.component';
import { SelectModule } from '../select/select.module';



@NgModule({
  declarations: [
    SearchPanelComponent,
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    SearchPanelComponent
  ]
})
export class SearchPanelModule { }
