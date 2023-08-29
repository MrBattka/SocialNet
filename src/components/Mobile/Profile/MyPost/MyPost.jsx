import React, { useRef } from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import Posts from "../Posts/Posts";
import classes from "./MyPost.module.css";
import { MyPostReduxForm } from "./MyPostForm/MyPostForm";

const MyPosts = ({
  posts,
  profile,
  isFetching,
  urlProfilePhoto,
  addPost,
  id,
  deletePost,
  idPost
}) => {
  const onPostMessage = (values) => {
    if (values.newPostText) {
      addPost(values.newPostText, id);
      values.newPostText = "";
    }
  };

  return (
    <div className={classes.wrapper}>
      <MyPostReduxForm
        onSubmit={onPostMessage}
      />
      <h2>Posts:</h2>
      <div className={classes.posts}>
        {isFetching ? (
          <Posts
            posts={posts}
            id={id}
            deletePost={deletePost}
            profile={profile}
            idPost={idPost}
            urlProfilePhoto={urlProfilePhoto}
          />
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default MyPosts;
