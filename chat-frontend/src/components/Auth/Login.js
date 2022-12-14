import React, { useState } from 'react'
import loginImage from '../../assets/images/login.svg'
import './Auth.css'
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '../../store/actions/auth'



const Login = () => {
	const navigate = useNavigate();
	//const location = useLocation()

	const dispatch = useDispatch()
	

	const [email, setEmail] = useState("john.doe@gmail.com")
	const [password, setPassword] = useState('secret')
	const submitForm =(e) => {
		e.preventDefault()

		dispatch(login({email,password}, navigate))

		//props history

		//AuthService.login({email, password}).then(res => {console.log(res);})


		// axios.post('http://127.0.0.1:3001/login', {email, password})
		// 	.then(res => {
		// 		console.log("res", res);
		// 	})
		// 	.catch(err =>{
		// 		console.log('err', err);
		// 	})
		

		//console.log({email, password});
	}
	return(
		<div id ='auth-container' >
			<div id = 'auth-card'>
				<div>
					<div  id = 'image-section' >
						<img src={loginImage} className='image-section' alt='Login' />
					</div>

					<div id = 'form-section'>
						<h2 className='primary'>Welcome back</h2>
						<form onSubmit={submitForm}>
							<div className='input-field'>
								<input
								onChange= {e=>setEmail(e.target.value)}
									value={email}
									required='required'
									type='text' 
									placeholder='Email' />
							</div>

							<div className='input-field'>
								<input
								onChange= {e=>setPassword(e.target.value)} 
									value={password}
									required='required'
									type='password' 
									placeholder='Password' />
							</div>

							<button >LOGIN</button>
						</form>

						<p><Link to='/Register'> Register </Link>Noww </p>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Login
//onClick={()=> navigate('/')}