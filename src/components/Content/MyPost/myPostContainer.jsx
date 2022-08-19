import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../Redux/profile-reduser';
import MyPosts from './mypost';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreater(text))
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;