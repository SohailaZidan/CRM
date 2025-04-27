import { createAction, props } from "@ngrx/store";

export const loginAction = createAction('[Login Page] login' , props<{email : string , password : string}>())