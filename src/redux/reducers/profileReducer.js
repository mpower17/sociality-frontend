import {actions} from "../actions/actions";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', image: 'https://i.imgur.com/ISw0Bxz.jpeg'},
        {id: 2, message: 'It\'s my post', image: 'https://i.imgur.com/l0FED10.jpeg'}
    ],
    newPostText: 'it',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    if (action.type === actions.ADD_POST) {
        return {
            ...state,
            newPostText: '',
            posts: [...state.posts, {
                id: 5,
                message: action.postMessage,
                image: "https://pm1.narvii.com/6600/80c6e84f00674e89b3769a4308f5699a6fbd6d8f_hq.jpg"
            }]
        }
    } else if (action.type === actions.CHANGE_POST_TEXT) {
        return {
            ...state,
            newPostText: action.newText
        };
    } else if (action.type === actions.SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        };
    }

    return state;
}
