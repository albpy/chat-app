import React,{useState} from 'react';
import registerImage from '../../assets/images/register.svg'
import {Link} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {register} from '../../store/actions/auth'


import './Auth.css'


const Register = () => {
	const [firstName, setFirstName]=useState('')
	const [lastName, setLastName]=useState('')
	const [email, setEmail]=useState('')
	const [gender, setGender]=useState('male')
	const [password, setPassword]=useState('')

	const navigate = useNavigate();
	const dispatch = useDispatch()

	const submitForm =(e) => {
		e.preventDefault()

		dispatch(register({firstName,lastName,email,gender,password}, navigate))
		}

	
	return(
		<div id ='auth-container'>
			<div id = 'auth-card'>
				<div>
					<div id = 'image-section'>
						<img src={registerImage} className='image-section' alt='Register' />
					</div>

					<div id = 'form-section'>
						<h2>Create an account</h2>
						<form onSubmit={submitForm}>
							<div className='input-field'>
								<input 
								onChange= {e=>setFirstName(e.target.value)}
									value={firstName}
									required='required'
									type='text' 
									placeholder='First Name' />
								
							</div>
							<div className='input-field'>
								<input
								onChange= {e=>setLastName(e.target.value)}
									value={lastName}
									required='required'
									type='text' 
									placeholder='Last Name' /> 
							</div>
							<div className='input-field'>
								<input
								onChange= {e=>setEmail(e.target.value)}
									value={email}
									required='required'
									type='text' 
									placeholder='Email' />
							</div>
							<div className='input-field'>
								<select
								onChange= {e=>setGender(e.target.value)}
									value={gender}
									required='required'
									>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
								</select>
							</div>

							<div className='input-field'>
								<input 
								onChange= {e=>setPassword(e.target.value)}
									value={password}
									required='required'
									type='password' 
									placeholder='Password' />
							</div>

							<button>REGISTER</button>
						</form>

						<p><Link to='/login'> LOGIN</Link> NOW</p>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Register