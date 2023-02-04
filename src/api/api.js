import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "f875b6a1-5fef-48ce-a963-4e6042f223a9" }
})

export const usersAPI = {
    requestGetUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId.id}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId.id}`)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrlData() {
        return instance.get(`security/get-captcha-url`)
    }
}