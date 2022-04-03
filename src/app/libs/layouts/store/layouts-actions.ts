import { createAction, props } from "@ngrx/store";
import { ELayout } from "../models/layouts.enum";

export const setLayoutAction = createAction(
    '[Layouts] Set actual layout',
    props<{
        actualLayout: ELayout
    }>()
);