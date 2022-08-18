import classes from './mypost.module.css';
import React from 'react';

function MyPosts(props) {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        if (props.newPostText == false) {
            return false
        } else {
            props.addPost();
        }
        newPostElement.current.value = '';
    }

    // let removePostText = () => {
    //     props.addPostActionCreater('');
    //     newPostElement.current.value='';
    // }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }  
    debugger
    return (
        <div className={classes.wrapper}>
            <div className={classes.textarea__wrapper}>
                <textarea className={classes.textarea} onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} />
            </div>
            <div className={classes.btn__wrapper}>
                <button className={classes.btn} onClick={ onAddPost } type="submit">Send</button>
                {/* <button className={classes.btn} onClick={ removePostText } type="submit">Remove</button> */}
            </div>
            <h2>Posts:</h2>
        </div>
    )
}

export default MyPosts;