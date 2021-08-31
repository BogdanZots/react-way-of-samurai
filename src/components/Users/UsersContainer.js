import React, {Component} from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {connect} from "react-redux";
import {
    getUsersThunkСreator,
    followThunkСreator,
    unfollowThunkСreator
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  
    componentDidMount() {
      console.log('123')
        this.props.getUsersThunkСreator()
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkСreator(pageNumber, this.props.pageSize)
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.isFetching
                        ? <Preloader/>
                        : null}
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        usersPage={this.props.usersPage}
                        follow={this.props.followThunkСreator}
                        unfollow={this.props.unfollowThunkСreator}
                        />
                </div>
            </div>
        )
    }
}

const mapStateTopProps = (state) => ({usersPage: state.usersPage, pageSize: state.usersPage.pageSize, totalUsersCount: state.usersPage.totalUsers, currentPage: state.usersPage.currentPage, isFetching: state.usersPage.isFetching});

let container = connect(mapStateTopProps, {
    getUsersThunkСreator: getUsersThunkСreator,
    unfollowThunkСreator: unfollowThunkСreator,
    followThunkСreator: followThunkСreator
})(UsersContainer);

export default container;