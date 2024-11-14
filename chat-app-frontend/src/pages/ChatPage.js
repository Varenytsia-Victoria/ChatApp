import { useState, useEffect } from 'react'
import axios from 'axios'

function ChatPage() {
	const [messages, setMessages] = useState([])
	const [newMessage, setNewMessage] = useState('')

	useEffect(() => {
		// Отримання повідомлень з сервера при завантаженні сторінки
		axios.get('/api/messages').then(response => {
			setMessages(response.data)
		})
	}, [])

	const sendMessage = async e => {
		e.preventDefault()
		const response = await axios.post('/api/messages', { text: newMessage })
		setMessages([...messages, response.data])
		setNewMessage('')
	}

	return (
		<div>
			<h2>Chat</h2>
			<div>
				{messages.map((msg, index) => (
					<p key={index}>{msg.text}</p>
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
