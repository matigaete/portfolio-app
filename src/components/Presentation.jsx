import * as React from 'react'

const Presentation = () => {
	const containerStyle = {
		textAlign: 'center',
		marginTop: '30vh',
		marginBottom: '50vh'
	}
	const divButtonStyle = {
		display: 'flex',
		justifyContent: 'center'
	}

	const buttonStyle = {
		width: '50%'
	}

	return (
		<div className='container' style={containerStyle}>
			<h2>Hola! Soy Matías Gaete</h2>
			<h3>Frontend Developer | Software Engineer</h3>
			<div className='grid'>
				<div style={divButtonStyle}>
					<button style={buttonStyle}> Contactame </button>
				</div>
				<div style={divButtonStyle}>
					<button style={buttonStyle}> Descarga mi CV </button>
				</div>
			</div>
		</div>
	)
}

export default Presentation