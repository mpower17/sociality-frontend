import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (<div className={styles.item}>
        <img src={props.image}  alt='img'/>
        {props.message}
    </div>);
}

export default Post
