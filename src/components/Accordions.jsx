import * as React from 'react'
import Accordion from './Accordion'
import ContactForm from './ContactForm'
import Technologies from './Technologies'
import '../styles/Accordions.css'

const Accordions = () => {

	return (
		<section className='container'>
			<Accordion id='about-me' title='Acerca de mi'>
				<span>
					Soy Ingeniero en Software que trabaja actualmente en plataforma de Commerce, con los framework de Angular y Spring
				</span>
			</Accordion>
			<Accordion id='technologies' title='Tecnologias'>
				<span>He utilizado las siguientes tecnologias:</span>
				<Technologies />
			</Accordion>
			<Accordion id='skills' title='Skills'>
				<ul>
					<li>Trabajo en equipo ✨</li>
					<li>Empatía 🤝🏻</li>
					<li>Autodidacta 🙌🏻</li>
					<li>Desarrollo Web 👨🏻‍💻</li>
					<li>Desarrollo en FrontEnd 💻</li>
					<li>Aprendizaje continuo 📚</li>
				</ul>
			</Accordion>
			<Accordion id='contact' title='Contacto'>
				<ContactForm />
			</Accordion>
		</section>
	)
}

export default Accordions