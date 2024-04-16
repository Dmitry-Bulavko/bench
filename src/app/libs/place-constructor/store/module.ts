import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PlaceConstructorEffects } from "./effects";
import { placeConstructorReducer } from "./reducer";
import { placeConstructorFeatureKey } from "./state";

@NgModule({
    imports: [
        StoreModule.forFeature(placeConstructorFeatureKey, placeConstructorReducer),
        EffectsModule.forFeature([PlaceConstructorEffects])
    ]
})
export class PlaceConstructorStoreModule {}