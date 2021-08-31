import { auth } from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';


const initialState = {
    isFetching: false,
    isAuth:false
};
const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
      return {
         ...state,
         ...action.data,
         isAuth:!state.isAuth
         
      };
    }
    return {
        ...state,
    };
};
export default authReducer;


export const setLoginData = (loginInfo) => ({ type: 'SET_USER_DATA', loginInfo })

export const setAuthThunk = () =>{
    console.log('injected')
    return function(dispatch){
        auth().then((response) => {
         if (response.data.resultCode === 0) {
          const { userId, login, email } = response.data.data;
          dispatch(setLoginData({ userId, login, email }));
         }
        });
    }
}
