import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { AreaElement } from "../models/area-element.model";
import { IConstructorControll } from "../comoponents/controll/controll.model";
import { IPlaceConstructorState, placeConstructorFeatureKey } from "./state";

export const PlaceConstructorFeatureSelector: MemoizedSelector<
    {},
    IPlaceConstructorState
> = createFeatureSelector<IPlaceConstructorState>(placeConstructorFeatureKey);

export const selectActivelElement = createSelector(
    PlaceConstructorFeatureSelector,
    (state: IPlaceConstructorState): string => state.activeElement
)

export const selectControlls = createSelector(
    PlaceConstructorFeatureSelector,
    (state: IPlaceConstructorState): IConstructorControll[] => state.controlls
)

export const selectAreaElements = createSelector(
    PlaceConstructorFeatureSelector,
    (state: IPlaceConstructorState): Map<string, AreaElement> => state.areaElements
)

export const selectLayerSize = createSelector(
    PlaceConstructorFeatureSelector,
    (state: IPlaceConstructorState): {width: number; height: number} => state.layerSize
)

export const selectActiveControl = createSelector(
    PlaceConstructorFeatureSelector,
    (state: IPlaceConstructorState): string => state.activeControl
)