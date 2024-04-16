import { AreaElementTable } from "../models/area-element.model";
import { AbstractElement } from "./abstract.element";

export class TableRectMElement extends AbstractElement {
    type:string = 'TableRectMElement';

    constructor(data: AreaElementTable) {
        super(data);
    }

    public getElement(): string {
        return `
            <svg
                width="180"
                height="60"
                x="${this.x - 90}"
                y="${this.y - 30}"
                viewBox="0 0 180 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="5" y="55" width="50" height="170" rx="1" transform="rotate(-90 5 55)" fill="#F3E3CC"/>
                <rect x="8.5" y="8.5" width="163" height="43" rx="0.5" stroke="#C4AA84"/>
                <rect x="5" y="55" width="50" height="170" rx="1" transform="rotate(-90 5 55)" stroke="#C4AA84" stroke-width="2"/>
            </svg>
        `
    }

    public getIcon(): string {
        return `
        <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="55" width="50" height="170" rx="1" transform="rotate(-90 5 55)" fill="#F3E3CC"/>
            <rect x="8.5" y="8.5" width="163" height="43" rx="0.5" stroke="#C4AA84"/>
            <rect x="5" y="55" width="50" height="170" rx="1" transform="rotate(-90 5 55)" stroke="#C4AA84" stroke-width="2"/>
        </svg>
        `;
    }
    
}