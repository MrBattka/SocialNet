import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import Posts from "../Posts/Posts";
import classes from "./MyPost.module.css";
import { MyPostReduxForm } from "./MyPostForm/MyPostForm";

const MyPosts = ({
  id,
  addPost,
  newPostText,
  isFetching,
  deletePost,
  profile,
  idPost,
  posts,
  urlProfilePhoto
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
        addPost={addPost}
        newPostText={newPostText}
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
