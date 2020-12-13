import * as HistoryActions from '../action/history.actions';
import { History } from '../model/history.model';

export type Action = HistoryActions.All;

const defaultState: History = {
    todo: []
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

export function historyReducer(state: History = defaultState, action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case HistoryActions.ADD_MESSAGE:
            return newState(state, {todo: [...state.todo,{task: action.payload}]});
        default:
            return state;
    }
}