import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsPageRoutingModule } from './news-page-router.module';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsPageRoutingModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsPageModule { }
