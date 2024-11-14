import React from 'react'

function ChatMessage({ message }) {
	return (
		<div className='message'>
			<strong>{message.username}:</strong> {message.text}
		</div>
	)
}

export default ChatMessage
