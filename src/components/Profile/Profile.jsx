import React from 'react';
import { withRouter } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

function Profile({ match }) {
  const { userId } = match.params;
  return (
    <div>
      <ProfileInfo userId={userId} />
      <MyPostsContainer />
    </div>
  );
}

export default withRouter(Profile); // при пом. виз роутер получаем доступ к url строке
