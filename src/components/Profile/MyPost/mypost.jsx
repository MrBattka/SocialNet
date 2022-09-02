import classes from './mypost.module.css';
import React from 'react';
import Posts from '../Posts/posts';

function MyPosts(props) {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        if (props.newPostText == false) {
            return false
        } else {
            props.addPost();
        }
    }
    let clickButtonEnten = () => {
        newPostElement.current.addEventListener('keydown', function (keyPress) {
            if (keyPress.keyCode === 13) {
                keyPress.preventDefault();
                onAddPost()
            }
        }, { once: true })
    }

    // let removePostText = () => {
    //     props.addPostActionCreater('');
    //     newPostElement.current.value= '';
    // }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        clickButtonEnten()
        props.updateNewPostText(text);
    }

    let postsElement = props.posts.map(p => <Posts post={p.message} profile={props.profile} key={p.id} />);

    return (
        <div className={classes.wrapper}>
            <div className={classes.textarea__wrapper}>
                <textarea className={classes.textarea} onChange={ onPostChange }
                    ref={ newPostElement } value={ props.newPostText } />
            </div>
            <div className={classes.btn__wrapper}>
                <button className={classes.btn} onClick={ onAddPost } type="submit">Post</button>
                {/* <button className={classes.btn} onClick={ removePostText } type="submit">Remove</button> */}
            </div>
            <h2>Posts:</h2>
            <div className={classes.Posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;