import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Profile.module.css';
import userImg from '../../assets/images/user.png';
import { setUserInfoThunk } from '../../redux/profileReducer';


const ProfileInfo = ({ userId }) => {
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.profilePage.profile);
    useEffect(() => {
        dispatch(setUserInfoThunk(userId))
    }, [userId]);
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



