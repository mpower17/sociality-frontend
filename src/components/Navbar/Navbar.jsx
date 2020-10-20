import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item + " " + styles.profile}>
                <NavLink to='/profile' activeClassName={styles.active}>
                    <span className={styles.leftIcon}/>
                    Profile
                </NavLink>
            </div>
            <div className={styles.item + " " + styles.dialogs}>
                <NavLink to='/dialogs' activeClassName={styles.active}>
                    <span className={styles.leftIcon}/>
                    Messages
                </NavLink>

            </div>
            <div className={styles.item + " " + styles.users}>
                <NavLink to='/users' activeClassName={styles.active}>
                    <span className={styles.leftIcon}/>
                    Users
                </NavLink>
            </div>
            <div className={styles.item + " " + styles.music}>
                <NavLink to='/music' activeClassName={styles.active}>
                    <span className={styles.leftIcon}/>
                    Music
                </NavLink>
            </div>
            <div className={styles.item + " " + styles.settings}>
                <NavLink to='/settings' activeClassName={styles.active}>
                    <span className={styles.leftIcon}/>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
