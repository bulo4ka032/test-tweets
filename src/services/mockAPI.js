import axios from "axios";

axios.defaults.baseURL = 'https://6478ad41362560649a2e3f94.mockapi.io/tweets/'

const limit = 3;

const searchParams = new URLSearchParams({
    limit,
})

export const getUsers = async (page = 1) => {
    try {
        const { data } = await axios.get(`/tweets?${searchParams}&page=${page}`);
        return data;
    } catch (error){
console.log(error);
    }
}

export const updateUser = async (userId, userFollowers) => {
    try {
        const {data} = axios.put(`/tweets/${userId}`, {followers: userFollowers})
        return data;
    } catch (error) {
        console.log(error);
    }
}

