import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news-page.module').then((m) => m.NewsPageModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./pages/partners/partners-page.module').then((m) => m.PartnersPageModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
