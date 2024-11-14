import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './auth.css'

function Register() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setError('Passwords do not match')
			return
		}

		try {
			await axios.post('/api/register', { username, password })
			navigate('/login') 
		} catch (error) {
			setError('Registration failed')
		}
	}

	return (
		<div className='register-page'>
			<h1>Register</h1>
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
				<input
					type='password'
					placeholder='Confirm Password'
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>
				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default Register
