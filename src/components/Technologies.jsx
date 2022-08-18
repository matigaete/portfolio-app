import * as React from 'react'
import logoAngular from '../assets/angular-logo.svg'
import logoReact from '../assets/react-logo.svg'
import logoTs from '../assets/ts-logo.svg'
import logoJs from '../assets/js-logo.svg'
import logoNode from '../assets/node-js-logo.svg'
import logoHtml from '../assets/html-5-logo.svg'
import logoCss from '../assets/css-logo.svg'
import logoScss from '../assets/scss-logo.svg'
import Technology from './Technology'

const Technologies = () => {
	const accordionStyle = {
		padding: '30px',
		display: 'flex',
		flexDirection: 'row'
	}

	const icons = [['Angular', logoAngular], ['React', logoReact], ['TypeScript', logoTs], ['JavaScript', logoJs], ['Node JS', logoNode], ['HTML', logoHtml], ['CSS', logoCss], ['SCSS', logoScss]]

	return (
		<div style={accordionStyle}>
			{icons.map(([title, icon], index) => <Technology key={index} title={title} img={icon} />)}
		</div >
	)
}

export default Technologies 