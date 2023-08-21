import React, { useRef } from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import Posts from "../Posts/Posts";
import classes from "./MyPost.module.css";
import { MyPostReduxForm } from "./MyPostForm/MyPostForm";

const MyPosts = (props) => {
  const scrollRef = useRef(null);

  const toScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const onPostMessage = (values) => {
    if (values.newPostText) {
      props.addPost(values.newPostText, props.id);
      values.newPostText = "";
      toScroll();
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <MyPostReduxForm
          onSubmit={onPostMessage}
          addPost={props.addPost}
          newPostText={props.newPostText}
        />
        <h2>Posts:</h2>
        <div className={classes.posts}>
          {props.isFetching ? (
            <Posts
              posts={props.posts}
              id={props.id}
              deletePost={props.deletePost}
              profile={props.profile}
              idPost={props.idPost}
              scrollRef={scrollRef}
            />
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
