import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';

const mapStateTopProps = (state) => {
    console.log(state)
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followingUp: (id) => {
            console.log(id)
            dispatch({
                type: 'FOLLOW',
                id: id
            })
        },
        followingDown: (id) => {
            console.log(id)
            dispatch({
                type: 'UNFOLLOW',
                id: id
            })
        },
        setUsers: (users) => {
            dispatch({
                type: 'SET_USERS',
                users
            })
        },
        changeActivePage:(e)=>{
            let newCurrentPage = e.target.textContent
            console.log('DISPATCH NEW PAGE',e)
            dispatch({
                type: 'CHANGE-ACTIVE-PAGE',
                newCurrentPage:newCurrentPage
            })
        }
    }
}

const UsersContainer = connect(mapStateTopProps, mapDispatchToProps)(Users)

export default UsersContainer;