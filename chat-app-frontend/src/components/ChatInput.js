import React, { useState } from 'react'

function ChatInput({ onSendMessage }) {
	const [newMessage, setNewMessage] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (newMessage.trim() !== '') {
			onSendMessage(newMessage)
			setNewMessage('')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='chat-input'>
			<input
				type='text'
				value={newMessage}
				onChange={e => setNewMessage(e.target.value)}
				placeholder='Type a message'
				required
			/>
			<button type='submit'>Send</button>
		</form>
	)
}

export default ChatInput
