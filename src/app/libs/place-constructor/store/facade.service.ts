import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as PlaceConstructorSelectors from './selectors';
import * as PlaceConstructorActions from './actions';
import { AreaElement } from "../models/area-element.model";

@Injectable({
    providedIn: 'root'
})
export class PlaceConstructorFacadeService {
    constructor(private store: Store) {}

    get activeElement$(): Observable<string> {
        return this.store.pipe(select(PlaceConstructorSelectors.selectActivelElement))
    }

    setActiveElement(elementId: string): void {
        this.store.dispatch(PlaceConstructorActions.setActiveElement({elementId}));
    }

    get areaElements$(): Observable<Map<string,AreaElement>> {
        return this.store.pipe(select(PlaceConstructorSelectors.selectAreaElements))
    }

    addElement(element: AreaElement): void {
        this.store.dispatch(PlaceConstructorActions.addAreaElement({
            element: {
                ...element,
                id: String(new Date().getTime())
            }
        }))
    }

    changeElement(id: string, element: AreaElement) {
        this.store.dispatch(PlaceConstructorActions.changeAreaElement({
            id,
            element
        }))
    }

    get layarSize$(): Observable<{width: number; height: number}> {
        return this.store.pipe(select(PlaceConstructorSelectors.selectLayerSize))
    }

    changeLayerSize(width: number, height: number) {
        this.store.dispatch(PlaceConstructorActions.changeLayerSize({
            width,
            height
        }))
    }

    get activeControl$(): Observable<string> {
        return this.store.pipe(select(PlaceConstructorSelectors.selectActiveControl));
    }

    setActiveControl(name: string) {
        this.store.dispatch(PlaceConstructorActions.setActiveControl({name}))
    }

    setAreaElements(elementsMap: Map<string, AreaElement>) {
        this.store.dispatch(PlaceConstructorActions.addAreaElements({elementsMap}));
    }

    deleteElement(elementId) {
        this.store.dispatch(PlaceConstructorActions.deleteElement({elementId}));
    }
}