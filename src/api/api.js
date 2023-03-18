import axios from "axios";

const DOMEN = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    // baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5e694a32-88c3-4d87-b810-2f2be13ba6bc"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance(DOMEN + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    authUser() {
        return instance(DOMEN + `auth/me`)
            .then(response => response.data)
    },
    getIdUserProfile(userId) {
        return fetch(DOMEN + `profile/${userId}`)
            // .then(response => response.data)
    },
    follow(userId) {
        return instance.post(DOMEN + `follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(DOMEN + `follow/${userId}`)
    },
}

