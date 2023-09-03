import React from "react";
import deleteIcon from "../../../../assets/img/delete.png";
import userPhoto from "../../../../assets/img/user.jpg";
import classes from "./Posts.module.css";

const Posts = ({ profile, deletePost, posts, urlProfilePhoto }) => {
  const handleClick = (post) => {
    post.isDelete = true;
    deletePost(post);
  };

  return (
    <div className={classes.wrapper}>
      {posts.map((post, id) => (
        <ul key={id}>
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
