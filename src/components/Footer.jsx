import * as React from 'react'
import linkLogo from '../assets/linkedin-logo.svg'
import gitLogo from '../assets/github-logo.svg'
import discLogo from '../assets/discord-logo.svg'
import LazyLoad from './LazyLoad'

const LinkIcon = React.lazy(() => import('./LinkIcons'))

const Footer = () => {
	const footerStyle = {
		textAlign: 'center',
		height: '10vh',
		marginTop: '20vh',
		paddingTop: '10vh',
		paddingBottom: '20vh',
		borderTop: '1px solid var(--muted-border-color)'
	}
	const iconsStyle = {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '30px'
	}

	return (
		<footer className='footer' style={footerStyle}>
			<span>Matías Gaete - Software Engineer 2022.</span>
			<LazyLoad style={iconsStyle}>
				<LinkIcon
					link='https://www.linkedin.com/in/matias-gaete-ponce-4125b8177/'
					img={linkLogo}
				/>
				<LinkIcon link='https://github.com/matigaete' img={gitLogo} />
				<LinkIcon link='' img={discLogo} />
			</LazyLoad>
		</footer>
	)
}

export default Footer
