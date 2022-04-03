export interface ISelect {
    value: string;
    icon?: string;
    options: ISelectOptions;
}

export interface ISelectOptions {
    [key: string]: string;
}