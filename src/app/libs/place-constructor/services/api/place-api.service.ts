import { Injectable } from "@angular/core";
import { AreaElements } from "../../elemets-lib";
import { IPlaceOptions } from "../../models/place-options.model";
import { PlaceConstructorFacadeService } from "../../store/facade.service";


@Injectable({
    providedIn: 'root'
})
export class PlaceApiService {
    
    constructor(
        private placeConstructoorService: PlaceConstructorFacadeService
    ) {}

    getPlace(userId = '0') {
        const candidate = window.localStorage.getItem('areaElements')    
    }

    savePlace(userId: string = '0', placeOptions: IPlaceOptions) {
        window.localStorage.setItem(userId, JSON.stringify(placeOptions))
    }

}