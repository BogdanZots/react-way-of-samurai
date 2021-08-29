import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import s from './Profile.module.css';
import userImg from '../../assets/images/user.png';

const ProfileInfo = ({ userId }) => {
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.profilePage.profile);
    const setUserInfo = (profile) => {
        dispatch({ type: 'SET-USER-PROFILE', profile });
    };
    useState(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                setUserInfo(data);
            });
    }, []);
    return (
        <div className="content">
            <div>
                <div className={s.descriptionBlock}>
                    <div>
                    {profileInfo
                        ? profileInfo.aboutMe
                        : null}
                    </div>
                    <img
                      src={profileInfo
                        ? profileInfo.photos.small
                        : userImg}
                      alt="avatar"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
