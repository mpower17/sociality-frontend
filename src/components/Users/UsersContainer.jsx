import Users from "./Users";
import {connect} from "react-redux";
import {followAC} from "../../redux/actions/actionCreators/followAC";
import {unfollowAC} from "../../redux/actions/actionCreators/unfollowAC";
import {setUsersAC} from "../../redux/actions/actionCreators/setUsersAC";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);