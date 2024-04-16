import { NgModule } from "@angular/core";
import { ButtonModule } from "src/app/components/button/button.module";
import { IconModule } from "src/app/components/icon/icon.module";
import { HeaderControlsComponent } from "./header-controls.component";

@NgModule({
    declarations: [
        HeaderControlsComponent
    ],
    imports: [
        ButtonModule,
        IconModule
    ],
    exports: [
        HeaderControlsComponent
    ]
})
export class HeaderControlsModule {}