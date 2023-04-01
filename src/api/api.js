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
    },
    getIdUserProfile(userId) {
        console.warn('Obsolete method. Please profileApi object.')
        return profileAPI.getIdUserProfile(userId)
    },
    follow(userId) {
        return instance.post(DOMEN + `follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(DOMEN + `follow/${userId}`)
    },
}
export const profileAPI = {

    getIdUserProfile(userId) {
        return instance.get(DOMEN + `profile/${userId}`);
    },
    getUserStatus(userId) {
        return instance.get(DOMEN + `profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(DOMEN + `profile/status`,{status:status});
    }

}

export const authAPI={
    login(email,password,rememberMe = false){
        return instance.post(DOMEN + 'auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete(DOMEN + 'auth/login')
    },
    authUser() {
        return instance(DOMEN + `auth/me`)
    },
}
