import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './UsersStyles.module.css';
import userImg from '../../assets/images/user.png';

const Users = ({
 totalUsersCount, pageSize, usersPage, followingDown, followingUp, onPageChanged, currentPage,
}) => {
    console.log(usersPage);
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 0; i < pagesCount - 2850; i += 1) {
        pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((page, i) => (
            <span
              role="presentation"
              onClick={(e) => onPageChanged(e)}
              className={currentPage === i + 1 && s.selectedPage}
            >
              {page + 1}
            </span>
                ))}
        </div>
        <h3>
          Users
        </h3>
        <div>
          <div>
            {usersPage
                        .users
                        .map((user) => (
                          <div key={user.id} className={s.userContainer}>
                            <div>
                              {user.followed
                                        ? <button type="button" onClick={() => followingDown(user.id)}>unfollow</button>
                                        : <button type="button" onClick={() => followingUp(user.id)}>follow</button>}
                            </div>
                            <div className={s.userPhoto}>
                              <NavLink to={`/profile/${user.id}`}>
                                <img
                                  src={user.photos.small
                                                ? user.photos.small
                                                : userImg}
                                  alt="user"
                                />
                              </NavLink>
                            </div>
                            <div className={s.userFullName}>{user.name}</div>
                            <div className={s.userStatus}>{user.status}</div>
                            <div className={s.userLocation}>{user.location}</div>
                          </div>
                        ))}
          </div>
        </div>
      </div>
    );
};
Users.propTypes = {
    totalUsersCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    usersPage: PropTypes.number.isRequired,
    followingDown: PropTypes.func.isRequired,
    followingUp: PropTypes.func.isRequired,
    onPageChanged: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};
export default Users;
