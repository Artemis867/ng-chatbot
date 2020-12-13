import { Action } from '@ngrx/store';


export const ADD_MESSAGE = '[CHAT] Add Message';

export class AddMessage implements Action {
    readonly type = ADD_MESSAGE;

    constructor(public payload: string) {
    }
}

export type All = AddMessage;