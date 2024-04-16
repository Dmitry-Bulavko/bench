
import { Injectable } from '@angular/core';
import { AreaElement } from '../models/area-element.model';
import { AreaElements } from '../elemets-lib';

@Injectable({
    providedIn: 'root'
})
export abstract class ElementsFactory {

    public create(type: string, args: AreaElement): AreaElement {
        const classCandidate = Object.values(AreaElements)
            .find((className) => new className(null).type === type)

        if (classCandidate) {
            return new classCandidate(args as any)
        }

        throw new Error(`Element with type ${type} not found`); 
    }
}