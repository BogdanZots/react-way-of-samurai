import React, {
  Component,
} from 'react';
import {
  connect,
} from 'react-redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader';

class UsersAPIComponent extends Component {
  componentDidMount() {
    const {
      pageSize,
      currentPage,
      usersPage,
      setUsers,
      setTotalUsersCount,
      toogleIsFetching,
    } = this.props;
    let { isFetching } = this.props;
    isFetching = true;
    if (usersPage.users.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then((response) => response.data)
        .then((data) => {
          toogleIsFetching(false);
          setTotalUsersCount(data.totalCount);
          setUsers(data.items);
        });
    }
    toogleIsFetching(false);
  }

  onPageChanged = (e) => {
    const {
      toogleIsFetching,
      changeActivePage,
      setUsers,
      pageSize,
    } = this.props;
    toogleIsFetching(true);
    changeActivePage(e);
    const currentPage = Number(e.target.textContent);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        toogleIsFetching(false);
        return response.data;
      })
      .then((data) => setUsers(data.items));
  }

  render() {
      const {
      isFetching,
      pageSize,
      currentPage,
      usersPage,
      totalUsersCount,
      followingUp,
      followingDown,
    } = this.props;
    console.log(isFetching);
    return (
      < >
        {' '}
        {isFetching
      ? <Preloader />
      : null}
        {' '}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={
      pageSize
    }
          currentPage={
       currentPage
    }
          onPageChanged={
      this.onPageChanged
    }
          usersPage={
       usersPage
    }
          followingUp={
      followingUp
    }
          followingDown={
      followingDown
    }
        />
        {' '}

      </ >
);
  }
}

const mapStateTopProps = (state) => ({
  usersPage: state.usersPage,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsers,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  followingUp: (id) => {
    dispatch({
      type: 'FOLLOW',
      id,
    });
  },
  followingDown: (id) => {
    dispatch({
      type: 'UNFOLLOW',
      id,
    });
  },
  setUsers: (users) => {
    dispatch({
      type: 'SET_USERS',
      users,
    });
  },
  changeActivePage: (e) => {
    const newCurrentPage = e.target.textContent;
    dispatch({
      type: 'CHANGE-ACTIVE-PAGE',
      newCurrentPage,
    });
  },
  setTotalUsersCount: (totalUsers) => {
    dispatch({
      type: 'SET-TOTAL-USER-COUNT',
      totalUsers,
    });
  },
  toogleIsFetching: (isFetching) => {
    dispatch({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    });
  },
});

const UsersContainer = connect(mapStateTopProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
