import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/actions/actionCreators/addPostAC";
import {changePostText} from "../../../redux/actions/actionCreators/changePostTextAC";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    changePostText
})(MyPosts);

export default MyPostsContainer;
