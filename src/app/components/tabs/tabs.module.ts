import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TabsItemComponent } from "./tabs-item/tabs-item.component";
import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        TabsComponent,
        TabsItemComponent
    ],
    exports: [
        TabsComponent,
        TabsItemComponent
    ]
})
export class TabsModule {}