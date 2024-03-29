import '../styles/Presentation.css'

const Presentation = () => {
	const divButtonStyle = {
		display: 'flex',
		justifyContent: 'center'
	}
	const imgStyle = {
		transform: 'scale(0.4)',
		borderRadius: '50%'
	}

	return (
		<section id='profile' className='container'>
			<div id='photo' className='container'>
				<img src='assets/profile.jpeg' style={imgStyle}></img>
			</div>
			<div id='details' className='container'>
				<h1>Hola! Soy Matías Gaete</h1>
				<h2>Frontend Developer | Software Engineer</h2>
				<div className='container' style={divButtonStyle}>
					<a role='button' href='cv-matias-gaete.pdf'>
						{' '}
						Descarga mi CV{' '}
					</a>
				</div>
			</div>
		</section>
	)
}

export default Presentation
