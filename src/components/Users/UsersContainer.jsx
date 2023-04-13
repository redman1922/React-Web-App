import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserSelector
} from "../../redux/selectors/user-selector";
import s from './Users.module.css'

const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize);
    }, [])


  const onPageChanged = (pageNumber) => {
        props.getUsersThunkCreator(pageNumber, props.pageSize);
    }

    return (<div className={s.usersPosition}>
            <Users
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
            />
        </div>

    )
}

let mapStateToProps = (state) => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    toggleFollowingProgress,
    getUsersThunkCreator
})(UsersContainer);
