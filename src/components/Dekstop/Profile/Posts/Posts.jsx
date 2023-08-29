import React from "react";
import deleteIcon from "../../../../assets/img/delete.png";
import userPhoto from "../../../../assets/img/user.jpg";
import classes from "./Posts.module.css";

const Posts = (props) => {
  const handleClick = (post) => {
    post.isDelete = true;
    props.deletePost(post);
  };

  return (
    <div className={classes.wrapper}>
      {props.posts.map((post, id) => (
        <ul key={id}>
          <li>
            <div className={classes.post}>
              <div className={classes.avatar}>
                <img
                  src={
                    props.profile.photos.small != null
                      ? props.profile.photos.small
                      : userPhoto
                  }
                />
              </div>
              <div className={classes.text}>
                {post.message}
                <img
                  className={classes.deleteBtn}
                  onClick={() => handleClick(post)}
                  src={deleteIcon}
                  alt="#"
                />
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
