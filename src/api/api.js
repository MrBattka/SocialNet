import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "f875b6a1-5fef-48ce-a963-4e6042f223a9" }
})

export const usersAPI = {
    requestGetUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId.id}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId.id}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data
        } )
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status })
        .then(response => {
            return response.data
        } )
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, { email, password, rememberMe })
        .then(response=> {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data
        })
    }
}