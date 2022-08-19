import * as React from 'react'
import '../styles/Presentation.css'
import photo from '../assets/profile.jpeg'

const Presentation = () => {
	const containerStyle = {
		textAlign: 'center',
		marginTop: '10vh',
		marginBottom: '15vh',
		display: 'flex',
		alignItems: 'center'
	}
	const divButtonStyle = {
		display: 'flex',
		justifyContent: 'center'
	}
	const imgStyle = {
		transform: 'scale(0.4)',
		borderRadius: '50%'
	}

	return (
		<section className='container' style={containerStyle}>
			<div id='photo' className='container'>
				<img src={photo} style={imgStyle}></img>
			</div>
			<div id='profile' className='container'>
				<h2>Hola! Soy Matías Gaete</h2>
				<h3>Frontend Developer | Software Engineer</h3>
				<div className='container' style={divButtonStyle}>
					<a role='button' href='cv-matias-gaete.pdf'> Descarga mi CV </a>
				</div>
			</div>
		</section>
	)
}

export default Presentation