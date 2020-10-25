import {Users} from "./Users";
import React from "react";
import axios from "axios";
import {followAC} from "../../redux/actions/actionCreators/followAC";
import {unfollowAC} from "../../redux/actions/actionCreators/unfollowAC";
import {setUsersAC} from "../../redux/actions/actionCreators/setUsersAC";
import {setCurrentPageAC} from "../../redux/actions/actionCreators/setCurrentPageACr";
import {setTotalUsersCountAC} from "../../redux/actions/actionCreators/setTotalUsersCountAC";
import {connect} from "react-redux";
import {setFetchingAC} from "../../redux/actions/actionCreators/setFetchingAC";
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setFetching(false);
            });
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            });
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChange={this.onPageChange}
            />}
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
