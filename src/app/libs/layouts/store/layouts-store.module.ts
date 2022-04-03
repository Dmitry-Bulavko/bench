import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LayoutsEffects } from "./layouts-effects";
import { layoutsReducer } from "./layouts-reducer";
import { layoutsFeatureKey } from "./layouts-state";

@NgModule({
	imports: [
		StoreModule.forFeature(layoutsFeatureKey, layoutsReducer),
		EffectsModule.forFeature([LayoutsEffects]),
	]
})
export class LayoutsStoreModule { }
