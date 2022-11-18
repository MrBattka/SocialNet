import classes from './MyPost.module.css';
import React from 'react';
import Posts from '../Posts/Posts';
import Preloader from '../../Common/Preloader/Preloader';
import { MyPostReduxForm } from './MyPostForm/MyPostForm';

function MyPosts(props) {
    
    let onPostMessage = (values) => {
        props.addPost(values.newPostText)
    }

    let postsElement = props.posts.map(p => <Posts post={p.message} profile={props.profile} key={p.profile} />);
    
    return (
        <div className={classes.wrapper}>
            <MyPostReduxForm onSubmit={onPostMessage} addPost={props.addPost} newPostText={props.newPostText} />
            <h2>Posts:</h2>
            <div className={classes.Posts}>
                { props.isFetching ? postsElement : <Preloader /> }
            </div>
        </div>
    )
}

export default MyPosts;