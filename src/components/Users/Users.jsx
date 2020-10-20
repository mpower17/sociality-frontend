import React from "react";
import classes from './Users.module.css'
import axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("")
    }

    return (<div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={classes.content}>
                            <img src={u.photoUrl} alt="user"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Follow</button>
                                : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;