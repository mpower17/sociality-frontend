import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC} from "../../redux/actions/actionCreators/followAC";
import {unfollowAC} from "../../redux/actions/actionCreators/unfollowAC";
import {setUsersAC} from "../../redux/actions/actionCreators/setUsersAC";
import {setCurrentPageAC} from "../../redux/actions/actionCreators/setCurrentPageACr";
import {setTotalUsersCountAC} from "../../redux/actions/actionCreators/setTotalUsersCountAC";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
