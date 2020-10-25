import {actions} from "../actions/actions";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
    } else if (action.type === actions.SET_FETCHING) {
        return {
            ...state,
            isFetching: action.isFetching
        }
    }

    return state;
}
