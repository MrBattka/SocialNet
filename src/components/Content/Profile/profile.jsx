import classes from './profile.module.css';
import React from 'react';

function Profile(props) {
    return (
        <div className={classes.profile__wrapper}>
            <div>
                <img className={classes.profile__img}
                    src='https://besco.ru/upload/iblock/4dd/66b6f8f3c67a51dbae67b1d6684d10e9.jpg' />
            </div>
            <div className={classes.profile__info}>
                <p className={classes.username}>Pablo Escobar</p>
                <p className={classes.about__user}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi nulla
                    debitis facilis repellat. Ullam in earum voluptatem eligendi blanditiis!</p>
            </div>
        </div>
    )
}

export default Profile;