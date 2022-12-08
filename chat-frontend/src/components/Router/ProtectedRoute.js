import React from 'react'
import { Outlet/*Route*/, Navigate/*Redirect*/} from 'react-router-dom'
import authReducer from '../../store/reducers/auth'
import {useSelector} from 'react-redux'

const useAuth = ()=>{
	const user=(state=> state.authReducer.IsLoggedIn)
	if (user){
		return true
	}else{
		return false
	}//we can use from actual server, context or localstorage
}

const ProtectedRoute = ()=>{
	const auth=useAuth()
	return auth?<Outlet/>:<Navigate t0 ="/login/"/>
}

export default ProtectedRoute