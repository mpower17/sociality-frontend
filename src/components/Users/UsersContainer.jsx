import {Users} from "./Users";
import React from "react";
import axios from "axios";
import {follow} from "../../redux/actions/actionCreators/followAC";
import {unfollow} from "../../redux/actions/actionCreators/unfollowAC";
import {setUsers} from "../../redux/actions/actionCreators/setUsersAC";
import {setCurrentPage} from "../../redux/actions/actionCreators/setCurrentPageACr";
import {setTotalUsersCount} from "../../redux/actions/actionCreators/setTotalUsersCountAC";
import {connect} from "react-redux";
import {setFetching} from "../../redux/actions/actionCreators/setFetchingAC";
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
})(UsersContainer);
