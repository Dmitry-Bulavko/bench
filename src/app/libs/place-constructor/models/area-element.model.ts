
export interface AreaElementBase {
    x: number;
    y: number;
    type: string;
    fill?: string;
    stroke?: string;
    id?: string;
    width?: number;
    height?: number
    group?: string;
    rotate?: number;
    getElement: () => string;
    getIcon: () => string;
}

export interface AreaElementSquare extends AreaElementBase {
    width: number;
    height: number;
}

export interface AreaElementCircle extends AreaElementBase {
    cx: number;
    cy: number;
    r: number;
}

export interface AreaElementTable extends AreaElementBase {
    width: number;
    height: number;
}


export type AreaElement =
 AreaElementSquare
 | AreaElementCircle
 | AreaElementTable