import React from 'react';
import styles from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.jpeg';

const ProfileInfo = (props) => {
    debugger
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt='test'/>
            </div>
            <div className={styles.descriptionBlock}>
                <p>ava + description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
