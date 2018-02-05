import { ActionReducer, Action } from '@ngrx/store';
import { BookPresentationStructure } from './../../models/books';

export const UPDATE_ALL_BOOKS = 'UPDATE_ALL_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK';

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export function BooksReducer(state, action: CustomAction) {
    switch (action.type) {
        case UPDATE_ALL_BOOKS:
            return action.payload;
        case REMOVE_BOOK:
            let newState = null;
            if(state[action.payload]){
                delete state[action.payload];
                newState = Object.assign({}, state);
            }
            return newState ? newState : state;
        case ADD_NEW_BOOK:
            state[Object.keys(action.payload).toString()] =
                action.payload[Object.keys(action.payload).toString()];
            newState = Object.assign({}, state);
            return newState;
        default:
            return state;
    }
}
