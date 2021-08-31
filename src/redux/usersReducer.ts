import { getUsers } from "../api/api";
import { deleteFollowingStatus, setFollowingStatus } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_ACTIVE_PAGE = 'CHANGE-ACTIVE-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
}
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false
};
const usersReducer = (state = initialState, action: any) => {
    const copyState = {
        ...state
    };
    if (action.type === FOLLOW) {
        copyState.users = state
            .users
            .map((user) => {
                if (action.id === user.id) {
                    return {
                        ...user,
                        followed: !user.followed
                    };
                }
                return user;
            });
        return {
            ...copyState
        };
    }
    if (action.type === UNFOLLOW) {
        copyState.users = state
            .users
            .map((user) => {
                if (action.id === user.id) {
                    return {
                        ...user,
                        followed: !user.followed
                    };
                }
                return user;
            });
        return {
            ...copyState
        };
    }
    if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        };
    }
    if (action.type === CHANGE_ACTIVE_PAGE) {
        return {
            ...copyState,
            currentPage: action.currentPage
        };
    }
    if (action.type === SET_TOTAL_USER_COUNT) {
        return {
            ...copyState,
            totalUsers: action.totalUsers
        };
    }
    if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...copyState,
            isFetching: action.isFetching
        };
    }
    return {
        ...state
    };
};

export const toogleIsFetching = (isFetching: any) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setTotalUsersCount = (totalUsers: any) => ({ type: SET_TOTAL_USER_COUNT, totalUsers })
export const setUsers = (users: any) => ({ type: SET_USERS, users })
export const followingUp = (id: any) => ({ type: FOLLOW, id })
export const followingDown = (id: any) => ({ type: UNFOLLOW, id })
export const changeActivePage = (e: any) => {
    const currentPage = e;
    return { type: CHANGE_ACTIVE_PAGE, currentPage };
}

export const getUsersThunkСreator = (currentPage: number, pageSize: number) => {
    return function (dispatch: any) {
        dispatch(toogleIsFetching(true))
        dispatch(changeActivePage(currentPage))
        getUsers(currentPage, pageSize).then((data: any) => {
            dispatch(toogleIsFetching(false));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setUsers(data.items));
        });
    }
}

export const unfollowThunkСreator = (userId: any) => {
    return function (dispatch: any) {
        deleteFollowingStatus(userId)
            .then((respone: any) => {
                if (respone.data.resultCode === 0) {
                    dispatch(followingDown(userId));
                }
            });
    }
}

export const followThunkСreator = (userId: any) => {
    return function (dispatch: any) {
        setFollowingStatus(userId)
            .then((respone: any) => {
                if (respone.data.resultCode === 0) {
                    dispatch(followingUp(userId));
                }
            });
    }
}


export default usersReducer;
