import AuthService from '../../services/authService'
import {LOGIN, REGISTER, LOGOUT} from'../types/index'





export const login = (params,navigate) => dispatch => {

	return AuthService.login(params)
		.then(data => { //payload data as response
			console.log(data)
			dispatch({type: LOGIN, payload:data })
			navigate('/')
		})
		.catch(err => {

		})
}

export const register = (params,navigate) => dispatch => {

	return AuthService.register(params)
		.then(data => { //payload data as response
			console.log(data)
			dispatch({type: REGISTER, payload:data })
			navigate('/')
		})
		.catch(err => {
			throw err

		})
}
export const logout = () => dispatch => {
	AuthService.logout()
	dispatch({type:LOGOUT})

}