import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthThunk } from '../../redux/authReducer';
const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(setAuthThunk())}>Login</button>
        </div>
    );
}

export default Login;
