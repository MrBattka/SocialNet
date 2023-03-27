import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import Posts from '../Posts/Posts';
import classes from './MyPost.module.css';
import { MyPostReduxForm } from './MyPostForm/MyPostForm';

const MyPosts = (props) => {

    const onPostMessage = (values) => {
        if (values.newPostText) {
            props.addPost(values.newPostText, props.id)
            values.newPostText = ''
        }
    }

    return (
        <div className={classes.wrapper}>
            <MyPostReduxForm onSubmit={onPostMessage} addPost={props.addPost} newPostText={props.newPostText} />
            <h2>Posts:</h2>
            <div className={classes.Posts}>
                {props.isFetching ?
                    <Posts posts={props.posts} id={props.id} deletePost={props.deletePost} profile={props.profile} idPost={props.idPost} />
                    : <Preloader />}
            </div>
        </div>
    )
}

export default MyPosts;