import * as React from 'react'
import logoAngular from '../assets/angular-logo.svg'
import logoReact from '../assets/react-logo.svg'
import logoTs from '../assets/ts-logo.svg'
import logoJs from '../assets/js-logo.svg'
import logoNode from '../assets/node-js-logo.svg'
import logoHtml from '../assets/html-5-logo.svg'
import logoCss from '../assets/css-logo.svg'
import logoScss from '../assets/scss-logo.svg'
import { ReactSVG } from 'react-svg'

const Technologies = () => {
	const accordionStyle = {
		padding: '30px',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row'
	}

	const icons = [logoAngular, logoReact, logoTs, logoJs, logoNode, logoHtml, logoCss, logoScss]

	return (
		<div className='container' style={accordionStyle}>
			{icons.map((icons, index) => <ReactSVG key={index} src={icons} />)}
		</div >
	)
}

export default Technologies 