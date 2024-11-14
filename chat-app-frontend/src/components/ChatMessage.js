import React, { useState } from 'react'
import axios from 'axios'

function ChatMessage({ message }) {
	return (
		<div className='message'>
			<strong>{message.username}:</strong> {message.text}
		</div>
	)
}

function Chat() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [message, setMessage] = useState('')

	const sendMessage = async () => {
		if (message.trim() === '') return 
		setLoading(true)
		try {
			await axios.post('/api/messages', { text: message })
			setMessage('') 
		} catch (err) {
			setError('Failed to send message!')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			<div>
				<ChatMessage message={{ username: 'User', text: message }} />
			</div>

			<div>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
					disabled={loading} 
				/>
				<button onClick={sendMessage} disabled={loading}>
					{loading ? 'Sending...' : 'Send Message'}
				</button>
			</div>

			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default Chat
