import classes from './content.module.css';
import MyPosts from './MyPost/mypost';
import Posts from './Posts/posts';
import Profile from './Profile/profile';
import React from 'react';
import MyPostsContainer from './MyPost/myPostContainer';

const Content = (props) => {

    let postsElement = props.state.profilePage.posts.map( p => <Posts post={p.message} /> );

    return (
        <div className={classes.content}>
            <div>
                <img className={classes.head__img} src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613162821_148-p-zheltii-fon-minimalizm-224.jpg" />
            </div>
            <div className={classes.profile__wrapper}>
                <Profile />
                <MyPostsContainer store={props.state}
                                  dispatch={props.dispatch} />
                <div className={classes.Posts}>
                    { postsElement }
                </div>
            </div>
        </div>
    )
}

export default Content;