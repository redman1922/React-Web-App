import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users,followingInProgress,unfollow,follow}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
        />

        {users.map(user => <User followingInProgress={followingInProgress}
                                 user={user}
                                 key={user.id}
                                 unfollow={unfollow}
                                 follow={follow}
        />)}
    </div>
}

export default Users;