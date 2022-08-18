import * as React from 'react'
import { ReactSVG } from 'react-svg'
import logo from '../assets/dark-mode-icon.svg'
import '../styles/Header.css'

const Header = () => {
	const turnDarkMode = () => {
		const main = document.querySelector('html')
		main.getAttribute('data-theme') === 'light' ?
			main.setAttribute('data-theme', 'dark') :
			main.setAttribute('data-theme', 'light')
	}
	const moveTo = (event) => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		})
		const { id } = event.target
		const details = document.querySelector(`.${id} details`)
		details.setAttribute('open', '')
	}

	return (
		<nav style={{ position: 'fixed', top: '0', width: '100%' }}>
			<ul style={{ paddingLeft: '2.25rem' }}>
				<li>
					<button onClick={turnDarkMode} style={{ borderRadius: '50px', scale: '0.5' }}>
						<ReactSVG src={logo}></ReactSVG>
					</button>
				</li>
			</ul>
			<ul style={{ paddingRight: '2.25rem' }}>
				<li><a id='about-me' onClick={moveTo}>Acerca de mi</a></li>
				<li><a id='technologies' onClick={moveTo}>Tecnologias</a></li>
				<li><a id='skills' onClick={moveTo}>Skills</a></li>
				<li><a id='contact' onClick={moveTo}>Contacto</a></li>
			</ul>
		</nav>
	)
}

export default Header