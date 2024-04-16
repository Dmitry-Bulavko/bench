import { NgModule } from "@angular/core";
import { SafeHTMLPipeModule } from "./safe-html/safe-html.module";

@NgModule({
    imports: [
        SafeHTMLPipeModule
    ],
    exports: [
        SafeHTMLPipeModule
    ]
})
export class PipesModule {}