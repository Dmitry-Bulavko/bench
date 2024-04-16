import { HostBinding } from "@angular/core";
import { AreaElementBase, AreaElementCircle, AreaElementSquare } from "../models/area-element.model";

export abstract class AbstractElement implements AreaElementBase {
    fill?: string = 'black';
    stroke?: string = 'black';
    id: string = `abstract_${Math.random() * new Date().getDate()}`;
    x: number = 0;
    y: number = 0;
    width: number = 50;
    height: number = 50;
    type:string = 'abstract';
    group: string = 'default';
    rotate: number = 0;

    constructor(data: AreaElementBase) {
        if(data) {
            this.fill = data.fill || this.fill;
            this.stroke = data.stroke || this.stroke;
            this.id = data.id || this.id;
            this.x = data.x || this.x;
            this.y = data.y || this.y;
            this.height = data.height || this.height;
            this.width = data.width || this.width;
            this.group = data.group || this.group;
            this.rotate = data.rotate || this.rotate;
        }
        
    }

    public getElement(): string {
        return ``
    }

    public getIcon(): string {
        return ``;
    }
    
}