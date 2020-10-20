import {actions} from "../actions/actions";

let initialState = {
    users: [
        {id: 1, followed: true, fullName: "Dimitry", status: "yo", location: {country: "Ukraine", city: "Kiev"}, photoUrl: 'https://i.imgur.com/ISw0Bxz.jpeg'},
        {id: 2, followed: false, fullName: "Maksim", status: "yo", location: {country: "Russia", city: "Moscow"}, photoUrl: 'https://i.imgur.com/ISw0Bxz.jpeg'},
        {id: 3, followed: true, fullName: "Ivan", status: "yo", location: {country: "Ukraine", city: "Kiev"}, photoUrl: 'https://i.imgur.com/ISw0Bxz.jpeg'},
    ],
    newPostText: 'it'
}

let updateFollow = (state, action, followed) => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return {...u, followed: followed};
            }
            return u;
        })
    };
}

export const usersReducer = (state = initialState, action) => {
    if (action.type === actions.FOLLOW) {
        return updateFollow(state, action, true);
    } else if (action.type === actions.UNFOLLOW) {
        return updateFollow(state, action, false);
    } else if (action.type === actions.SET_USERS) {
        return {
            ...state,
            users: [...state.users, ...action.users]
        };
    }

    return state;
}