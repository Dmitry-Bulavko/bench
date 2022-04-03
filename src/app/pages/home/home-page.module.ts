import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomePageModule {}