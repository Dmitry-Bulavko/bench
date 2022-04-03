import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearComponent } from './components/clear/clear.component';
import { PublicComponent } from './components/public/public.component';
import { AdminComponent } from './components/admin/admin.component';
import { LayoutHandlerComponent } from './components/layout-handler/layout-handler.component';
import { HeaderModule } from 'src/app/components/header/header.module';



@NgModule({
  declarations: [
    ClearComponent,
    PublicComponent,
    AdminComponent,
    LayoutHandlerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    LayoutHandlerComponent
  ]
})
export class LayoutsModule { }
