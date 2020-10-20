import {actions} from "../actions/actions";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
    debugger
    if (action.type === actions.FOLLOW) {
        return updateFollow(state, action, true);
    } else if (action.type === actions.UNFOLLOW) {
        return updateFollow(state, action, false);
    } else if (action.type === actions.SET_USERS) {
        return {
            ...state,
            users: action.users
        };
    } else if (action.type === actions.SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.currentPage
        }
    } else if (action.type === actions.SET_TOTAL_USERS_COUNT) {
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }
    }

    return state;
}
