import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = ({ onPostChange, profilePage, addPost }) => (
  <div className={s.postsBlock}>
    <h3>
      My posts
    </h3>
    <div>
      <div>
        <textarea onChange={onPostChange} value={profilePage.newPostText} />
      </div>
      <div>
        <button type="button" onClick={addPost}>Add button</button>
      </div>
    </div>
    <div className="posts">
      {profilePage
                .posts
                .map((item) => (<Post message={item.message} key={item.id} likeCount={item.likeCount} />))}
    </div>
  </div>
);

MyPosts.propTypes = {
    onPostChange: PropTypes.func.isRequired,
/*     profilePage: PropTypes.objectOf(PropTypes.object()).isRequired, */
    addPost: PropTypes.func.isRequired,
};
export default MyPosts;
