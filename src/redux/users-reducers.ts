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
    followed : boolean
}
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
};
const usersReducer = (state = initialState, action: any) => {
    const copyState = {
        ...state,
    };
    if (action.type === FOLLOW) {
        copyState.users = state
            .users
            .map((user) => {
                if (action.id === user.id) {
                    return {
                        ...user,
                        followed: !user.followed,
                    };
                }
                return user;
            });
        return {
            ...copyState,
        };
    } if (action.type === UNFOLLOW) {
        copyState.users = state
            .users
            .map((user) => {
                if (action.id === user.id) {
                    return {
                        ...user,
                        followed: !user.followed,
                    };
                }
                return user;
            });
        return {
            ...copyState,
        };
    } if (action.type === SET_USERS) {
        return {
            ...state,
            users: [
                ...action.users,
            ],
        };
    } if (action.type === CHANGE_ACTIVE_PAGE) {
        return {
            ...copyState,
            currentPage: action.newCurrentPage,
        };
    }
    if (action.type === SET_TOTAL_USER_COUNT) {
        return {
            ...copyState,
            totalUsers: action.totalUsers,
        };
    }
    if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...copyState,
            isFetching: action.isFetching,
        };
    }
    return {
        ...state,
    };
};
/* export const setUsersAC = (users) => ({ type: SET_USERS, users }) */
export default usersReducer;
