import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "a1b446b4-e455-44b0-aac9-6513133be227" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(u) {
        return instance.post(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    },
    getUnfollow(u) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    }
}