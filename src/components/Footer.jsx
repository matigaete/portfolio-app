import * as React from 'react'

const Footer = () => {
	const footerStyle = {
		textAlign: 'center',
		height: '10vh',
		marginTop: '20vh',
		paddingTop: '10vh',
		paddingBottom: '20vh',
		borderTop: '1px solid var(--muted-border-color)'
	}

	return (
		<div className='footer' style={footerStyle}>
			Matías Gaete 2022

			Redes sociales:
			Linked
			Github
			Discord
		</div>
	)
}

export default Footer

