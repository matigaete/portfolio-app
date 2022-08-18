import * as React from 'react'

const ContactForm = () => {
	return (
		<form>
			<label> Nombre
				<input></input>
			</label>
			<label> Email
				<input></input>
			</label>
			<label> Cuentanos tu problema
				<textarea></textarea>
			</label>
			<button>Enviar</button>
		</form>
	)
}

export default ContactForm