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

		if (Notification.permission === 'granted') {
			const notifyNewMessage = () => {
				new Notification('New Message', { body: 'You have a new message' })
			}
			socket.on('newMessage', notifyNewMessage)
			return () => socket.off('newMessage', notifyNewMessage)
		}

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
		<div className='chat-container'>
			<Navbar />
			<h2>Chat</h2>
			<MessageList messages={messages} />
			<ChatInput onSendMessage={sendMessage} />
		</div>
	)
}

export default ChatPage
