import * as React from 'react'
import { ReactSVG } from 'react-svg'
import logo from '../assets/dark-mode-icon.svg'
import upIcon from '../assets/up-arrow-icon.svg'
import '../styles/Header.css'

const Header = () => {
	const handleDarkMode = () => {
		const main = document.querySelector('html')
		main.getAttribute('data-theme') === 'light' ?
			main.setAttribute('data-theme', 'dark') :
			main.setAttribute('data-theme', 'light')
	}
	const handleUpClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	const handleMoveTo = (event) => {
		const { id } = event.target
		const details = document.querySelector(`.${id} details`)
		details.setAttribute('open', '')
		const top = details.getBoundingClientRect().top + window.pageYOffset - 125
		window.scrollTo({ top: top, behavior: 'smooth' })
	}
	const navStyle = {
		position: 'fixed',
		top: '0',
		width: '100%',
		backgroundColor: 'var(--background-color)',
		zIndex: '1'
	}
	const iconStyle = {
		paddingLeft: '2.25rem'
	}
	const menuStyle = {
		paddingRight: '2.25rem'
	}
	const buttonStyle = {
		paddingRight: '15px',
		borderRadius: '50px',
		scale: '0.7'
	}

	return (
		<nav style={navStyle}>
			<ul style={iconStyle}>
				<li>
					<a onClick={handleUpClick} style={buttonStyle}>
						<ReactSVG src={upIcon}></ReactSVG>
					</a>
					<a onClick={handleDarkMode} style={buttonStyle}>
						<ReactSVG src={logo}></ReactSVG>
					</a>
				</li>
			</ul>
			<ul style={menuStyle}>
				<li><a id='about-me' onClick={handleMoveTo}>Acerca de mí</a></li>
				<li><a id='technologies' onClick={handleMoveTo}>Tecnologías</a></li>
				<li><a id='skills' onClick={handleMoveTo}>Skills</a></li>
				<li><a id='contact' onClick={handleMoveTo}>Contacto</a></li>
			</ul>
		</nav>
	)
}

export default Header