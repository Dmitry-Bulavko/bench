export enum ETabType {
    button,
    link,
}

export interface ITab {
    type: ETabType;
    value: string;
    action?: Function;
    iconBefore?: string;
    iconAfter?: string;
    active?: boolean;
    href?: string;
}

export type ITabs = ITab[];