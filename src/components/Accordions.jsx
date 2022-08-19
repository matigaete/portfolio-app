import * as React from 'react'
import Accordion from './Accordion'
import ContactForm from './ContactForm'
import Technologies from './Technologies'
import '../styles/Accordions.css'

import logoAngular from '../assets/angular-logo.svg'
import logoReact from '../assets/react-logo.svg'
import logoTs from '../assets/ts-logo.svg'
import logoJs from '../assets/js-logo.svg'
import logoNode from '../assets/node-js-logo.svg'
import logoHtml from '../assets/html-5-logo.svg'
import logoCss from '../assets/css-logo.svg'
import logoScss from '../assets/scss-logo.svg'
import logoJava from '../assets/java-logo.svg'
import logoPHP from '../assets/php-logo.svg'

const Accordions = () => {
	const divStyle = {
		width: '55%',
		textAlign: 'center'
	}
	const frontEnd = [['Angular', logoAngular], ['React', logoReact], ['TypeScript', logoTs], ['JavaScript', logoJs], ['HTML', logoHtml], ['CSS', logoCss], ['SCSS', logoScss]]
	const backEnd = [['Node JS', logoNode], ['Java', logoJava], ['PHP', logoPHP]]

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
				<div className='container' style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
					<Technologies title='FrontEnd' icons={frontEnd} />
					<Technologies title='BackEnd' icons={backEnd} />
				</div>
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