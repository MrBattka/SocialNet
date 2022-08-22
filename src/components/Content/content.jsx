import classes from './content.module.css';
import MyPosts from './MyPost/mypost';
import Posts from './Posts/posts';
import Profile from './Profile/profile';
import React from 'react';
import MyPostsContainer from './MyPost/myPostContainer';

const Content = (props) => {

    

    return (
        <div className={classes.content}>
            <div>
                <img className={classes.head__img} src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613162821_148-p-zheltii-fon-minimalizm-224.jpg" />
            </div>
            <div className={classes.profile__wrapper}>
                <Profile />
                <MyPostsContainer  />       
            </div>
        </div>
    )
}

export default Content;