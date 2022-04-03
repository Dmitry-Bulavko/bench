import { ELayout } from "../models/layouts.enum";

export const layoutsFeatureKey = 'layouts';

export interface ILayoutsState {
    actualLayout: ELayout
}

export const layoutsInitialState: ILayoutsState = {
    actualLayout: ELayout.Public
} 