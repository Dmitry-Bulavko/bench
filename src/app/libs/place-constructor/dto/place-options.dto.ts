import { AreaElement } from "../models/area-element.model";

export class PlaceOptionsDTO {
    width: number;
    height: number;
    areaElements: Map<string, AreaElement>;

    constructor(placeOptions: string) {
        try {
            const placeOptionsObject = JSON.parse(placeOptions)
            this.width = placeOptionsObject?.width;
            this.height = placeOptionsObject?.height;
            this.areaElements = new Map(placeOptionsObject.areaElements)

        } catch (e) {
            throw new Error(e)
        }
    }
}