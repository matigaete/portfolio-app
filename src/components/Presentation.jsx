import { useMediaQuery } from '@mui/material'
import '../styles/Presentation.css'
import photo from '../assets/profile.jpeg'
import wallpaper from '../assets/wallpaper.jpeg'
import wallpaperMobile from '../assets/wallpaper-mobile.jpeg'

const Presentation = () => {
	const isMobile = useMediaQuery('not (min-width:480px)')

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
			<img
				className='background'
				src={isMobile ? wallpaperMobile : wallpaper}
			/>
			<div id='photo' className='container'>
				<img src={photo} style={imgStyle}></img>
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
