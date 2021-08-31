import axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage = 2, pageSize = 10) => { // ПРОБЛЕМА ТУТ 
  return axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, {
    withCredentials: true,
    headers: {
      'API-KEY': '3bd95a96-c2d8-42b3-bd58-f06dedd4d1ed'
    }
  }).then(response => {
    return response.data
  })
}

export const getUserInfo = (userId) => {
  return axios
    .get(`${baseUrl}profile/${userId}`)
    .then((response) => response.data)
}

export const setFollowingStatus = (userId) => {
  return axios.post(`${baseUrl}follow/${userId}`, {}, {
    withCredentials: true,
    headers: {
      'API-KEY': '3bd95a96-c2d8-42b3-bd58-f06dedd4d1ed',
    },
  })
}
export const deleteFollowingStatus = (userId) => {
  return axios.delete(`${baseUrl}follow/${userId}`, {
    withCredentials: true,
    headers: {
      'API-KEY': '3bd95a96-c2d8-42b3-bd58-f06dedd4d1ed',
    },
  })
}

export const auth = () => {
return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
}