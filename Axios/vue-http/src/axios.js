import axios from 'axios'
import config from './config/config'

const instance = axios.create({})

instance.defaults.baseURL = config.apiURL

instance.interceptors.request.use(config =>{
   
    config.headers.common['Authorization'] = `Bearer token_jwt`

    return config

}, error =>{
    return Promise.reject(error)
})

export default instance