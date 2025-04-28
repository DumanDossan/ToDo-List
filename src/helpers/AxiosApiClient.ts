import axios from "axios";

export const AxiosApiClient = axios.create({
    baseURL: 'https://dummyjson.com/'
})