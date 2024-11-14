import React from 'react'
import ChatMessage from './ChatMessage'

function MessageList({ messages }) {
  if (!messages.length) return null

  useEffect(() => {
		const chatContainer = document.querySelector('.message-list')
		chatContainer.scrollTop = chatContainer.scrollHeight
	}, [messages])

  
  return (
		<div className='message-list'>
			{messages.map((msg, index) => (
				<ChatMessage key={index} message={msg} />
			))}
		</div>
	)
}

export default MessageList
