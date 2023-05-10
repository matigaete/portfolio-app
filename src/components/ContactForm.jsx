import { useState } from 'react'
import { sendMail } from '../services/mailService'
import '../styles/ContactForm.css'

const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [text, setText] = useState('')
	const handleSubmit = (event) => {
		const { target } = event
		const { name, email, problem } = target
		sendMail(name.value, email.value, problem.value)
			.then(() => {
				setName('')
				setEmail('')
				setText('')
			})
			.catch((err) => console.error(err))
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				{' '}
				Nombre
				<input
					required
					name='name'
					placeholder='Nombre...'
					onChange={(event) => setName(event.target.value)}
					value={name}
				></input>
			</label>
			<label>
				{' '}
				Email
				<input
					required
					type='email'
					name='email'
					placeholder='Email...'
					onChange={(event) => setEmail(event.target.value)}
					value={email}
				></input>
			</label>
			<label>
				{' '}
				Cuéntanos tu problema
				<textarea
					required
					name='problem'
					onChange={(event) => setText(event.target.value)}
					value={text}
				></textarea>
			</label>
			<button>Enviar</button>
		</form>
	)
}

export default ContactForm
