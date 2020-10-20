import {profileReducer} from "../reducers/profileReducer";
import {dialogsReducer} from "../reducers/dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', image: 'https://i.imgur.com/ISw0Bxz.jpeg'},
                {id: 2, message: 'It\'s my post', image: 'https://i.imgur.com/l0FED10.jpeg'}
            ],
            newPostText: 'it'
        },

        dialogsPage: {
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
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('store changed');
    },

    dispatch(action) {
        let profileState = profileReducer(this._state.profilePage, action);
        let dialogsState = dialogsReducer(this._state.dialogsPage, action);

        this._state.profilePage = profileState;
        this._state.dialogsPage = dialogsState;

        this._callSubscriber(store.getState());
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;