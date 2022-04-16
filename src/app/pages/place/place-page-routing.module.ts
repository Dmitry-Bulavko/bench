import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PlaceComponent } from "./place.component";

const routes = [
    {
        path: ':id',
        component: PlaceComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlacePageRoutingModule {}