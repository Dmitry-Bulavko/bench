import { ActionReducer, createReducer, on } from "@ngrx/store";
import { 
    IPlaceConstructorState,
    placeConstructorInitialState
} from "./state";
import * as PlaceConstructorActions from './actions';

export const placeConstructorReducer: ActionReducer<IPlaceConstructorState> = createReducer(
    placeConstructorInitialState,
    on(
        PlaceConstructorActions.addAreaElement,
        (state: IPlaceConstructorState, { element }) => {
            const newElements = new Map([...state.areaElements]);
            newElements.set(element.id, element);
            return {
                ...state,
                areaElements: newElements//new Map([...state.areaElements.set(element.id, element)])
            }
        }
    ),
    on(
        PlaceConstructorActions.setActiveElement,
        (state: IPlaceConstructorState, { elementId }) => ({
            ...state,
            activeElement: elementId
        })
    ),
    on(
        PlaceConstructorActions.changeAreaElement,
        (state: IPlaceConstructorState, {id, element}) => ({
            ...state,
            areaElements: new Map([...state.areaElements.set(
                element.id,
                {
                    ...state.areaElements.get(element.id),
                    ...element
                }
            )])
        })
    ),
    on(
        PlaceConstructorActions.changeLayerSize,
        (state: IPlaceConstructorState, {width, height}) => ({
            ...state,
            layerSize: {
                width,
                height
            }
        })
    ),
    on(
        PlaceConstructorActions.setActiveControl,
        (state: IPlaceConstructorState, { name }) =>({
            ...state,
            activeControl: name
        })
    ),
    on(
        PlaceConstructorActions.addAreaElements,
        (state: IPlaceConstructorState, { elementsMap }) => ({
            ...state,
            areaElements: new Map([...elementsMap])
        })
    ),
    on(
        PlaceConstructorActions.deleteElement,
        (state: IPlaceConstructorState, { elementId }) => {
            state.areaElements.delete(elementId);
            return {
                ...state,
                areaElements: new Map([...state.areaElements])
            }
        }
    )
    // on()
)