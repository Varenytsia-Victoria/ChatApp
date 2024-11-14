import React, { useState } from 'react'
import axios from 'axios'

function FilePicker() {
	const [file, setFile] = useState(null)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	const handleFileChange = e => {
		setFile(e.target.files[0])
		setError('')
		setSuccess('')
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!file) {
			setError('Please select a file to upload')
			return
		}

		const formData = new FormData()
		formData.append('file', file)

		try {
			await axios.post('/api/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			setSuccess('File uploaded successfully')
		} catch (error) {
			setError('File upload failed')
		}
	}

	return (
		<div className='file-attach'>
			<h1>Attach a File</h1>
			{error && <p className='error'>{error}</p>}
			{success && <p className='success'>{success}</p>}
			<form onSubmit={handleSubmit}>
				<input type='file' onChange={handleFileChange} />
				<button type='submit'>Upload</button>
			</form>
		</div>
	)
}

export default FilePicker
