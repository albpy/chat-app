import React, {useState} from 'react'
import './Navbar.css'
import {useSelector, useDispatch} from 'react-redux'
import authReducer from '../../../store/reducers/auth'
import {logout} from '../../../store/actions/auth'


const Navbar = () => {


	const dispatch = useDispatch()
	const [showProfileOptions, setShowProfileOptions] = useState(false)


	const user = useSelector((state) => state.authReducer.user)
	return (
		<div id='navbar'>
			<h2>Chat.we</h2>
			<div onClick={() => setShowProfileOptions(!showProfileOptions)} id='profile-menu'>
				<img  width ="40" height='50' src={user.avatar} alt='Avatar'/>
				<p>{user.firstName} {user.lastName}</p>
				{
					showProfileOptions &&
			                <div id='profile-options'>
			                	<p>Update profile</p>
			                        <p onClick={() => dispatch(logout())} >Logout</p>
			                </div>
			        }
			</div>
		</div>
		
	)

}
export default Navbar