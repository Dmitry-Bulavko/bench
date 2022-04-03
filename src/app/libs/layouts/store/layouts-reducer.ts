import { ActionReducer, createReducer, on } from "@ngrx/store";
import { ILayoutsState, layoutsInitialState } from "./layouts-state";
import * as LayoutsActions from './layouts-actions';

export const layoutsReducer: ActionReducer<ILayoutsState> = createReducer(
    layoutsInitialState,
    on(
        LayoutsActions.setLayoutAction,
        (state: ILayoutsState, { actualLayout }) => ({
            ...state,
            actualLayout
        })
    )
);
