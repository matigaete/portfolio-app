import * as React from 'react'
import Accordion from './Accordion'
import ContactForm from './ContactForm'
import Technologies from './Technologies'
import '../styles/Accordions.css'

const Accordions = () => {
	const divStyle = {
		width: '45%',
		textAlign: 'center'
	}

	return (
		<section className='container'>
			<Accordion id='about-me' title='Acerca de mi'>
				<div className='container' style={divStyle}>
					<span>
						Soy Ingeniero en Software 💻 que trabaja actualmente para plataformas de e-commerce 🛒, en la empresa se utilizan los framework de Angular para Frontend y Spring en Backend 👨🏻‍💻
					</span>
				</div>
			</Accordion>
			<Accordion id='technologies' title='Tecnologías'>
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