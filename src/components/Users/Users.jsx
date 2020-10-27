import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpeg';
import {NavLink} from "react-router-dom";

export class Users extends React.Component {
    render() {
        let pageSize = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageSize; i++) {
            pages.push(i);
        }

        return (<div>
                <div>
                    {pages.map((p) => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : null}
                                     onClick={() => this.props.onPageChange(p)}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={styles.content}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Follow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}
