import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Header from './Header';
import {setAuthThunk} from '../../redux/authReducer';

const HeaderContainer = () => {
    return (
        <div>
            <Header/>
        </div>
    );
};

export default HeaderContainer;
