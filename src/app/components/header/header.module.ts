import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '../button/button.module';
import { TabsModule } from '../tabs/tabs.module';
import { LogoModule } from '../logo/logo.module';
import { SearchPanelModule } from '../search-pannel/search-panel.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    ButtonModule,
    TabsModule,
    LogoModule,
    SearchPanelModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
