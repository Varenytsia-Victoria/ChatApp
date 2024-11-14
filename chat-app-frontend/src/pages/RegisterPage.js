import { useState } from 'react'
import axios from 'axios'

function RegisterPage() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post('/api/register', {
				username,
				email,
				password,
			})
			console.log('User registered:', response.data)
			// Перенаправлення після реєстрації (наприклад, на головну сторінку)
		} catch (err) {
			setError('Registration failed')
		}
	}

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={username}
					onChange={e => setUsername(e.target.value)}
					placeholder='Username'
					required
				/>
				<input
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Email'
					required
				/>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					required
				/>
				<button type='submit'>Register</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	)
}

export default RegisterPage
