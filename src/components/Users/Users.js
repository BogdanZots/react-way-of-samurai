import React, {Component} from 'react';
import axios from 'axios'
import s from './UsersStyles.module.css'
import userImg from '../../assets/images/user.png'

class UsersC extends Component {
    /*     constructor(props) {
        super(props)
    } */
    componentDidMount() {
        console.log(this.props)
        let pageSize = this.props.pageSize
        let totalUserCount = this.props.totalUserCount
        if (this.props.usersPage.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${3}`)
                .then(response => response.data)
                .then(data => this.props.setUsers(data.items))
        }
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        console.log(pagesCount)
        let pages = []
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i)
        }
        console.log(pages)
        return (
            <div>
                <div>
                    {pages.map((page, i) => {
                        console.log(pages)
                        return <span
                            onClick={(e) => this.props.changeActivePage(e)}
                            className={this.props.currentPage == i + 1 && s.selectedPage}>{page + 1}</span>
                    })}
                </div>
                <h3>
                    Users
                </h3>
                <div>
                    <div>
                        {this
                            .props
                            .usersPage
                            .users
                            .map(user => {
                                return <div key={user.id} className={s.userContainer}>
                                    <div>
                                        {user.followed
                                            ? <button onClick={() => this.props.followingDown(user.id)}>unfollow</button>
                                            : <button onClick={() => this.props.followingUp(user.id)}>follow</button>
}
                                    </div>
                                    <div className={s.userPhoto}>
                                        <img
                                            src={user.photos.small
                                            ? user.photos.small
                                            : userImg}
                                            alt="user"/>
                                    </div>
                                    <div className={s.userFullName}>{user.name}</div>
                                    <div className={s.userStatus}>{user.status}</div>
                                    <div className={s.userLocation}>{user.location}</div>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersC;
