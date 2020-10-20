import MyPosts from "./MyPosts";
import {addPostAC} from "../../../redux/actions/actionCreators/addPostAC";
import {changePostTextAC} from "../../../redux/actions/actionCreators/changePostTextAC";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (text) => {
            dispatch(addPostAC(text));
        },

        onPostChange: (text) => {
            dispatch(changePostTextAC(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;