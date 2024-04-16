import { AreaElementSquare, AreaElementTable } from "../models/area-element.model";
import { AbstractElement } from "./abstract.element";

export class TableRectLElement extends AbstractElement {
    type:string = 'TableRectLElement';

    constructor(data: AreaElementTable) {
        super(data);
    }

    public getElement(): string {
        return `
            <svg
                width="180"
                height="120"
                x="${this.x - 90}"
                y="${this.y - 60}"
                viewBox="0 0 180 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="11" y="109" width="98" height="158" rx="1" transform="rotate(-90 11 109)" fill="#F3E3CC"/>
                <rect x="14.5" y="14.5" width="151" height="91" stroke="#C4AA84"/>
                <rect x="11" y="109" width="98" height="158" rx="1" transform="rotate(-90 11 109)" stroke="#C4AA84" stroke-width="2"/>
            </svg>
        `
    }

    public getIcon(): string {
        return `
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11" y="109" width="98" height="158" rx="1" transform="rotate(-90 11 109)" fill="#F3E3CC"/>
            <rect x="14.5" y="14.5" width="151" height="91" stroke="#C4AA84"/>
            <rect x="11" y="109" width="98" height="158" rx="1" transform="rotate(-90 11 109)" stroke="#C4AA84" stroke-width="2"/>
        </svg>
        `;
    }
    
}