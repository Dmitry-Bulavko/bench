import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { IAppState } from "src/app/models/store.model";
import { ELayout } from "../models/layouts.enum";
import { ILayoutsState, layoutsFeatureKey } from "./layouts-state";

export const LayoutsFeatureSelector: MemoizedSelector<
    {},
    ILayoutsState
> = createFeatureSelector<ILayoutsState>(layoutsFeatureKey);

export const selectActualLayout = createSelector(
    LayoutsFeatureSelector,
    (state: ILayoutsState):ELayout => state.actualLayout,
);