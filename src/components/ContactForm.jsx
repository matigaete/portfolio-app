import * as React from 'react'
import { sendMail } from '../services/mailService'
import '../styles/ContactForm.css'

const handleSubmit = (event) => {
	event.preventDefault()
	const { target } = event
	const { name, email, problem } = target
	sendMail(name.value, email.value, problem.value)
		.then(response => console.log(response))
		.catch(err => console.error(err))
}

const ContactForm = () => {
	return (
		<form onSubmit={handleSubmit}>
			<label> Nombre
				<input required name='name' placeholder='Nombre...'></input>
			</label>
			<label> Email
				<input required type='email' name='email' placeholder='Email...'></input>
			</label>
			<label> Cuéntanos tu problema
				<textarea required name='problem'></textarea>
			</label>
			<button>Enviar</button>
		</form>
	)
}

export default ContactForm