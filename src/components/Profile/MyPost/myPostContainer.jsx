import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, resetNewPostTextAC, updateNewPostTextAC } from '../../../Redux/profile-reduser';
import MyPosts from './MyPost';

const mapStateToProps = (state) => {
    
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
            dispatch(resetNewPostTextAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;