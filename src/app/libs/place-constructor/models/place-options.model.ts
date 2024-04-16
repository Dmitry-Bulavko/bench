import { AreaElement } from "./area-element.model";

export interface IPlaceOptions {
    areaWidth: number;
    areaHeight: number;
    areaElements: Map<string, AreaElement>
}