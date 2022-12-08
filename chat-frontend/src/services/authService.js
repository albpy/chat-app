import API from './api'


const AuthService={

	login: (data) => {
			
		return API.post('/login', data)
			.then(({data})=> {
				setHeadersAndStorage(data)
				API.defaults.headers['Authorization']=`Bearer ${data.token}`
				return data
			})
			.catch(err => {
				
			    // if(err.data){
				// 	console.log("Data :", err.data.data);//status code out of the range of 2xx
				// }
				// else if (err.request){
				// 	console.log("this is err", err.response);//request was made but no response was received
				// }
			    // else{
				console.log('Auth service err', err);//} error on setting up the requst
				//}
				throw err
			})
	},

	register: (data) => {
		return API.post('/register', data)
			.then(({data})=> {
				setHeadersAndStorage(data)
				API.defaults.headers['Authorization']=`Bearer ${data.token}`
				return data
			})
			.catch(err => {
				console.log('Auth service err', err);
				throw err
			})
	},


	 logout: () => {
	 	API.defaults.headers['Authorization']=''
	 	localStorage.removeItem('user')
        localStorage.removeItem('token')
	 }

}
const setHeadersAndStorage = ({ user, token }) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export default AuthService