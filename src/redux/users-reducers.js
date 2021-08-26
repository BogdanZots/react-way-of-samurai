import {act} from "react-dom/cjs/react-dom-test-utils.production.min";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_ACTIVE_PAGE = 'CHANGE-ACTIVE-PAGE';
let initialState = {
    users: [
    ],
    pageSize:5,
    totalUsers:19,
    currentPage:1
}

const usersReducer = (state = initialState, action) => {
    console.log(action)
    let copyState = {
        ...state
    }
    if (action.type === FOLLOW) {
        copyState.users = state
            .users
            .map(user => {
                if (action.id === user.id) {
                    return {
                        ...user,
                        followed: !user.followed
                    }
                }
                return user
            })
        return {
            ...copyState
        }

    } else if (action.type === UNFOLLOW) {
        copyState.users = state
            .users
            .map(user => {
                if (action.id === user.id) {
                    return {
                        ...user,
                        followed: !user.followed
                    }
                }
                return user
            })
        return {
            ...copyState
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: [
                ...state.users,
                ...action.users
            ]
        }
    }
    else if(action.type === CHANGE_ACTIVE_PAGE){
    console.log('CHANGE ACTIVE PAGE',action.newCurrentPage)
     copyState.currentPage = state.currentPage
     copyState.currentPage = action.newCurrentPage
     return{
         ...copyState
     }
    }
    return {
        ...state
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer