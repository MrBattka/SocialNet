import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "f875b6a1-5fef-48ce-a963-4e6042f223a9" },
});

const instanceMessage = axios.create({
  withCredentials: true,
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export const getMessage = async (dispatch) => {
  try {
    const res = instanceMessage.get(`posts`);
    res.then((response) => dispatch(response.data));
  } catch (err) {
    if (axios.AxiosError(err)) {
      console.log(err.response?.data.errText, "error");
    } else if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export const dialogsAPI = {
    requestGetDialogs() {
        return instanceMessage.get('users')
    },
    requsetGetPhotos() {
        return instanceMessage.get('photos?albumId=2')
    },
    requsetGetMessages() {
        return instanceMessage.get(`posts`);
    }
}

export const usersAPI = {
  requestGetUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  requestGetFriendUsers(currentPage, pageSize, friend = true) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}&friend=${friend}`
    );
  },
  follow(userId) {
    return instance.post(`follow/${userId.id}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId.id}`);
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrlData() {
    return instance.get(`security/get-captcha-url`);
  },
};
