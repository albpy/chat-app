import axios from 'axios'
import store from '../store'
import {logout} from '../store/actions/auth'

//const accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXIiOm51bGwsImlkIjoxLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImdlbmRlciI6Im1hbGUiLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTA0VDE4OjI1OjIxLjgwM1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTA0VDE4OjI1OjIxLjgwM1oiLCJpYXQiOjE2NzA0Nzk3MTgsImV4cCI6MTY3MDU2NjExOH0.UlZq7KgOeCUhQBdNr8_swYnJSjCaEyG3W0_9ruMypG4'

const API = axios.create({
	
 	baseURL:'http://127.0.0.1:3001',
 	headers:{
 		'content-type':'application/json',
 		'Accept':'application/json',
// 		'Authorization':`Bearer ${accessToken}`
 	},

	
})

API.interceptors.response.use(
    res => {
        return res
    },
    err => {
        if (err.response.status !== 401) {
            throw err
        }

        if (typeof err.response.data.error.name !== 'undefined') {
            if (err.response.data.error.name === 'TokenExpiredError') {
                store.dispatch(logout())
                throw err
            }
        }
    }
)
export default API

