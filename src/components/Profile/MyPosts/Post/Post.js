import React from 'react';
import PropTypes from 'prop-types';

function Post({ message, likeCount }) {
    return (
      <div className="post item">
        <img className="avatarImg" src="https://schoolsw3.com/tryit/avatar.png" alt="avatar" />
        {message}
        <span>
          {' '}
          Like
          {likeCount}
        </span>
      </div>
    );
}

Post.propTypes = {
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
};

export default Post;
