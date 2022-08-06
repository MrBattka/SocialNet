import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../Redux/profile-reduser';
import MyPosts from './mypost';

const MyPostsContainer = (props) => {
    let addPost = () => {
        let action = addPostActionCreater();
        props.dispatch(action);
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''});
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    }  
    return (
        <MyPosts addPost={ addPost } 
                 updateNewPostText={ onPostChange } 
                 posts={props.store.profilePage.posts} 
                 newPostText={props.store.profilePage.newPostText} />
    )
}

export default MyPostsContainer;