import { lazy } from 'react'
import LazyLoad from './LazyLoad'

const LinkIcon = lazy(() => import('./LinkIcons'))

const Footer = () => {
	const footerStyle = {
		position: 'absolute',
		width: '100%',
		textAlign: 'center',
		height: '10vh',
		marginTop: '20vh',
		paddingTop: '10vh',
		paddingBottom: '20vh',
		borderTop: '1px solid var(--muted-border-color)',
		backgroundColor: '#00000080'
	}
	const iconsStyle = {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '30px'
	}

	return (
		<footer className='footer' style={footerStyle}>
			<span>Matías Gaete - Software Engineer 2023.</span>
			<LazyLoad style={iconsStyle}>
				<LinkIcon
					link='https://www.linkedin.com/in/matias-gaete-ponce-4125b8177/'
					img={'logos/linkedin-logo.svg'}
				/>
				<LinkIcon
					link='https://github.com/matigaete'
					img={'logos/github-logo.svg'}
				/>
				<LinkIcon link='' img={'logos/discord-logo.svg'} />
			</LazyLoad>
		</footer>
	)
}

export default Footer
