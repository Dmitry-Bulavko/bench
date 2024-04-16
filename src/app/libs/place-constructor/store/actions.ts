import { createAction, props } from "@ngrx/store";
import { AreaElement } from "../models/area-element.model";

export const setActiveElement = createAction(
    '[Place constructor] set active element',
    props<{
        elementId: string;
    }>()
)

export const addAreaElement = createAction(
    '[Place constructor] add area element',
    props<{
        element: AreaElement;
    }>()
)

export const addAreaElements = createAction(
    '[Place constructor] add area elements',
    props<{
        elementsMap: Map<string, AreaElement>;
    }>()
)

export const changeAreaElement = createAction(
    '[Place constructor] change area element',
    props<{
        id: string;
        element: AreaElement;
    }>()
)

export const changeLayerSize = createAction(
    '[Place constructor] change layer size',
    props<{
        width: number;
        height: number;
    }>()
)

export const setActiveControl = createAction(
    '[Place constructor] set active control',
    props<{
        name: string
    }>()
)

export const deleteElement = createAction(
    '[Place constructor] delete active element',
    props<{
        elementId: string
    }>()
)