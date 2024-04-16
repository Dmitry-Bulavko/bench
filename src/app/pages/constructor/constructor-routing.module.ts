import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorComponent } from './constructor.component';

const routes: Routes = [
    {
        path: '',
        component: ConstructorComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConstructorRoutingModule { }