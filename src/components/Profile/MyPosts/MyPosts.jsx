import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.onAddPost(text);
        newPostElement.current.value = '';
    }

    let changePost = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={changePost} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {
                    props.posts.map((el) => {
                        return <Post message={el.message} image={el.image}/>
                    })
                }
            </div>
        </div>
    );
}

export default MyPosts;
