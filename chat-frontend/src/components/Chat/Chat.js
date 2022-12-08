import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import authReducer from '../../store/reducers/'
import Navbar from './components/Navbar'
import {fetchChats} from '../../store/actions/chat'
import FriendList from './components/FriendList/FriendList'
import Messenger from './components/Messenger/Messenger'



import './Chat.css'

const Chat = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.authReducer.user)

	useEffect(() => {
		dispatch(fetchChats()).then(res => console.log(res)).catch(err => console.log(err))
	}, [dispatch])
	
	
	return (
		<div id= 'chat-container'>
			<Navbar/>
			<div id='chat-wrap'>
				<FriendList/>
			</div>
		</div>
	);
}
export default Chat