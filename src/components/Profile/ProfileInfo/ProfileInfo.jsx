import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1200x800'
    alt='test'/>
            </div>
            <div className={styles.descriptionBlock}>
                <p>ava + description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
