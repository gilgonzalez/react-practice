import ActionMap from "../lib/ActionMap";
import { AuthState } from "./AuthContext";

export enum AuthActionType {
    LOGIN = "login",
    LOGOUT = "logout",
  }
export type AuthPayload = {
    [AuthActionType.LOGIN]: string
    [AuthActionType.LOGOUT]: undefined
}

export type TAuthAction = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>]

const initialState : AuthState = {
    logged : false
}

export const authReducer = (state : AuthState = initialState, action : TAuthAction) => {

    switch(action.type){
        case AuthActionType.LOGIN:
            return {
                ...state,
                logged : true,
                user : action.payload
            };
        case AuthActionType.LOGOUT:
            return {
                logged : false,
            };
        default:
            return state;
    }
}