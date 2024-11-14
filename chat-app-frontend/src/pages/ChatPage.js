import { useState, useEffect } from 'react'
import axios from 'axios'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000') 

function ChatPage() {
	const [messages, setMessages] = useState([])
	const [newMessage, setNewMessage] = useState('')
	const [username, setUsername] = useState('') 

	useEffect(() => {
		axios.get('/api/messages').then(response => {
			setMessages(response.data)
		})

		socket.on('newMessage', message => {
			setMessages(prevMessages => [...prevMessages, message])
		})

		return () => {
			socket.off('newMessage')
		}
	}, [])

	const sendMessage = async e => {
		e.preventDefault()

		socket.emit('sendMessage', { text: newMessage, username })

		setMessages(prevMessages => [
			...prevMessages,
			{ text: newMessage, username },
		])
		setNewMessage('')
	}

	return (
		<div>
			<h2>Chat</h2>
			<div>
				{messages.map((msg, index) => (
					<p key={index}>
						<strong>{msg.username}:</strong> {msg.text}
					</p>
				))}
			</div>
			<form onSubmit={sendMessage}>
				<input
					type='text'
					value={newMessage}
					onChange={e => setNewMessage(e.target.value)}
					placeholder='Type a message'
					required
				/>
				<button type='submit'>Send</button>
			</form>
		</div>
	)
}

export default ChatPage
