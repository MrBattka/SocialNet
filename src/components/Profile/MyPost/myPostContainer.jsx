import { connect } from 'react-redux';
import { addPostAC } from '../../../Redux/profile-reduser';
import MyPosts from './MyPost';

const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText, id) => {
            dispatch(addPostAC(newPostText, id));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;