
export const SHOW = 'SHOW';
export const HIDE = 'HIDE';

export interface payloadType {
    show : boolean
}
export interface SHOWAction {
    type : typeof SHOW
    payload : boolean
}

export interface HIDEAction {
    type : typeof HIDE
    payload : boolean

}

export type Status = SHOWAction | HIDEAction

export type AppActions =Status;