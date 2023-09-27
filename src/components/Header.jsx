import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { ReactSVG } from 'react-svg'

const Header = () => {
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<Link to={'/'}>
						<ReactSVG src={'logos/home-icon.svg'} />
					</Link>
				</li>
				<li>
					<Link to={'/about-me'}>Acerca de mí</Link>
				</li>
				<li>
					<Link to={'/technologies'}>Tecnologías</Link>
				</li>
				<li>
					<Link to={'/skills'}>Skills</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Header
