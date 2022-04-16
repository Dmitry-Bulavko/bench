import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { PartnersPageRoutingModule } from './partners-page-router.module';



@NgModule({
  declarations: [
    PartnersComponent
  ],
  imports: [
    CommonModule,
    PartnersPageRoutingModule
  ]
})
export class PartnersPageModule { }
