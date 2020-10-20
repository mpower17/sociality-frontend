import {actions} from "../actions/actions";

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "it"},
        {id: 3, message: "yo"}
    ],
    dialogs: [
        {id: 1, name: "Dimitry"},
        {id: 2, name: "Michael"},
        {id: 3, name: "Jhon"},
        {id: 4, name: "Ivan"},
    ],
    newMessageText: 'it'
}

export const dialogsReducer = (state = initialState, action) => {
    if (action.type === actions.ADD_MESSAGE) {
        return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, {
                id: 1,
                message: action.message
            }]
        }
    } else if (action.type === actions.CHANGE_MESSAGE_TEXT) {
        return {
            ...state,
            newMessageText: action.newMessageText,
        }
    }

    return state;
}