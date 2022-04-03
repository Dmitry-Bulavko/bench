import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ELayout } from "../models/layouts.enum";
import * as LayoutsSelectors from "./layouts-selectors";
import * as LayoutsActions from "./layouts-actions";

@Injectable({
    providedIn: 'root'
})
export class LayoutsFacadeService {
    constructor(private store: Store) { }

    get actualLayout$(): Observable<ELayout> {
        return this.store.pipe(select(LayoutsSelectors.selectActualLayout));
    }

    setActualLayout(actualLayout: ELayout): void {
        this.store.dispatch(LayoutsActions.setLayoutAction({actualLayout}));
    }
}