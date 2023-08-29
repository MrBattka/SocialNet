import React from "react";
import userPhoto from "../../../../assets/img/user.jpg";
import deleteIcon from "../../../../assets/img/delete.png";
import classes from "./Posts.module.css";

const Posts = ({ posts, deletePost, profile, urlProfilePhoto }) => {
  const handleClick = (post) => {
    post.isDelete = true;
    deletePost(post);
  };

  return (
    <div className={classes.wrapper}>
      {posts.map((post, id) => (
        <ul key={id} className={classes.wrapper_post}>
          <li>
            <div className={classes.post}>
              <div className={classes.avatar}>
                <img
                  src={
                    profile.photos.large ??
                    urlProfilePhoto ??
                    userPhoto
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
