import { AreaElementTable } from "../models/area-element.model";
import { AbstractElement } from "./abstract.element";

export class SofaElement extends AbstractElement {
    type:string = 'SofaElement';
    group: string = 'sofa';
    constructor(data: AreaElementTable) {
        super(data);
    }

    public getElement(): string {
        return `
            <svg 
                width="60"
                height="60"
                x="${this.x - 30}"
                y="${this.y - 30}"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 19C21 17.3431 22.3431 16 24 16H54C55.6569 16 57 17.3431 57 19V41C57 42.6569 55.6569 44 54 44H24C22.3431 44 21 42.6569 21 41V19Z" fill="#E7A18B" stroke="#875140" stroke-width="2"/>
                <path d="M21 43V44H22H56C57.6569 44 59 45.3431 59 47V51C59 52.6568 57.6569 54 56 54H11V6H56C57.6568 6 59 7.34315 59 9V12.947C59 14.6193 57.6327 15.9688 55.9605 15.9468L22.0132 15.5001L21 15.4868V16.5V43Z" fill="#C48C7F" stroke="#875140" stroke-width="2"/>
            </svg>
        `
    }

    public getIcon(): string {
        return `
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 19C21 17.3431 22.3431 16 24 16H54C55.6569 16 57 17.3431 57 19V41C57 42.6569 55.6569 44 54 44H24C22.3431 44 21 42.6569 21 41V19Z" fill="#E7A18B" stroke="#875140" stroke-width="2"/>
            <path d="M21 43V44H22H56C57.6569 44 59 45.3431 59 47V51C59 52.6568 57.6569 54 56 54H11V6H56C57.6568 6 59 7.34315 59 9V12.947C59 14.6193 57.6327 15.9688 55.9605 15.9468L22.0132 15.5001L21 15.4868V16.5V43Z" fill="#C48C7F" stroke="#875140" stroke-width="2"/>
        </svg>
        `;
    }
    
}