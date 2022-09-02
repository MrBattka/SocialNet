import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, resetNewPostTextActionCreater, updateNewPostTextActionCreater } from '../../../Redux/profile-reduser';
import MyPosts from './mypost';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
            dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: '' })
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreater(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;