import { connect } from "react-redux";
import { addPostAC, deletePost } from "../../../../Redux/profile-reduser";
import MyPosts from "./MyPost";
import { compose } from "redux";
import { withAuthLocation } from "../../../../hoc/withAuthLocation";

const MyPostContainer = ({
  posts,
  newPostText,
  profile,
  isFetching,
  addPostAC,
  deletePost,
  urlProfilePhoto
}) => {
  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      profile={profile}
      isFetching={isFetching}
      addPost={addPostAC}
      deletePost={deletePost}
      urlProfilePhoto={urlProfilePhoto}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.newPostText,
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    urlProfilePhoto: state.profilePage.urlProfilePhoto
  };
};

export default compose(
  connect(mapStateToProps, { addPostAC, deletePost }),
  withAuthLocation
)(MyPostContainer);
