import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './auth.css'

function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post('/api/login', { username, password })
			localStorage.setItem('token', response.data.token) 
			navigate('/chat') 
		} catch (error) {
			setError('Invalid credentials')
		}
	}

	return (
		<div className='login-page'>
			<h1>Login</h1>
			{error && <p className='error'>{error}</p>}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
					required
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default Login
