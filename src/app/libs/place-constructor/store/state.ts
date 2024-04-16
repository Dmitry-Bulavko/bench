import { AreaElement } from "../models/area-element.model";
import { IConstructorControll } from "../comoponents/controll/controll.model";
import { DEFAULT_LAYER_HEIGHT, DEFAULT_LAYER_WIDTH } from "../config";

export const placeConstructorFeatureKey = 'placeConstructor';

export interface IPlaceConstructorState {
    controlls: IConstructorControll[];
    areaElements: Map<string, AreaElement>;
    activeElement: string;
    activeControl: string;
    layerSize: { 
        width: number;
        height: number;
    }
}

export const placeConstructorInitialState: IPlaceConstructorState = {
    controlls: [],
    areaElements: new Map(),
    activeElement: null,
    activeControl: null,
    layerSize: {
        width: DEFAULT_LAYER_WIDTH,
        height: DEFAULT_LAYER_HEIGHT,
    }
}