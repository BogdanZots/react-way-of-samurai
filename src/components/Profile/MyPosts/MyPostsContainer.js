import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateTopProps = (state) => ({
        profilePage: state.profilePage,
    });

const mapDispatchToProps = (dispatch) => ({
            onPostChange: (e) => {
            const text = e.target.value;
            dispatch({ type: 'UPDATE-NEW-POST-TEXT', newPostText: text });
            },
             addPost: () => {
                dispatch({ type: 'ADD-POST' });
            },
        });

const myPostsContainer = connect(mapStateTopProps, mapDispatchToProps)(MyPosts);

export default myPostsContainer;
