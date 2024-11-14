import React, { useState } from 'react'

function ChatInput({ onSendMessage, isSending }) {
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
				disabled={isSending} // Disable input when sending message
			/>
			<button type='submit' disabled={isSending}>
				{isSending ? 'Sending...' : 'Send'}
			</button>
		</form>
	)
}

export default ChatInput
