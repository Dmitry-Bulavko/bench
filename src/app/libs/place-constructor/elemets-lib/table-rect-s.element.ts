import { AreaElementSquare, AreaElementTable } from "../models/area-element.model";
import { AbstractElement } from "./abstract.element";

export class TableRectSElement extends AbstractElement {
    type:string = 'TableRectSElement';

    constructor(data: AreaElementTable) {
        super(data);
    }

    public getElement(): string {
        return `
            <svg
                width="120"
                height="60"
                x="${this.x - 60}"
                y="${this.y - 30}"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="5" y="55" width="50" height="110" rx="1" transform="rotate(-90 5 55)" fill="#F3E3CC"/>
                <rect x="8.5" y="8.5" width="103" height="43" rx="0.5" stroke="#C4AA84"/>
                <rect x="5" y="55" width="50" height="110" rx="1" transform="rotate(-90 5 55)" stroke="#C4AA84" stroke-width="2"/>
            </svg>
        `
    }

    public getIcon(): string {
        return `
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="55" width="50" height="110" rx="1" transform="rotate(-90 5 55)" fill="#F3E3CC"/>
            <rect x="8.5" y="8.5" width="103" height="43" rx="0.5" stroke="#C4AA84"/>
            <rect x="5" y="55" width="50" height="110" rx="1" transform="rotate(-90 5 55)" stroke="#C4AA84" stroke-width="2"/>
        </svg>        
        `;
    }
    
}