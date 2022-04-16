import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardsListModule } from "src/app/components/cards-list/cards-list.module";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CardsListModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomePageModule {}