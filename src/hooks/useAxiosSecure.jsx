import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../providers/AuthProviders";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

export const useAxiosSecure = () =>{
    const {logOut} = useContext(AuthProvider);
    const navigate = useNavigate();

useEffect(() => {
    // intercept request (client ----> server)
    axiosSecure.interceptors.request.use(config => {
        const token = `Bearer ${localStorage.getItem('access-token')}`
        if(token){
            config.headers.Authorization = token;
        }
        return config;
    })

    // intercept response  (client <---- server)
    axiosSecure.interceptors.response.use(response => response, async error => {
    if(error.response && error.response.status === 401 || error.response && error.response.status === 403){
        await logOut();
        navigate('/login')
    }
    return Promise.reject(error)
    })

} ,[logOut, navigate, axiosSecure])


return [axiosSecure]
}