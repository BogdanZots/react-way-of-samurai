const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [{
            id: 1,
            message: 'My first message(Post)',
            likeCount: '5',
        },
        {
            id: 2,
            message: 'My second message(Post)',
            likeCount: '10',
        },
        {
            id: 3,
            message: 'My third message(Post)',
            likeCount: '15',
        },
    ],
    newPostText: '',
    profile: null,
};

export const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        const newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0,
        };
        const stateCopy = { ...state };
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return {
            ...stateCopy,
        };
    } if (action.type === UPDATE_NEW_POST_TEXT) {
        const stateCopy = { ...state };
        stateCopy.newPostText = action.newPostText;
        return {
            ...stateCopy,
        };
    }
    if (action.type === SET_USER_PROFILE) {
        const stateCopy = { ...state };
        stateCopy.profile = action.profile;
        return {
            ...stateCopy,
        };
    }
    return {
        ...state,
    };
};
