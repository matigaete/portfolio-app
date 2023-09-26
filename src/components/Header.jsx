import '../styles/Header.css'

const Header = () => {
	const handleMoveTo = (event) => {
		const { id } = event.target
		console.log(id)
		const details = document.querySelector(`.${id}-section`)
		const top = details.getBoundingClientRect().top + window.pageYOffset - 75
		window.scrollTo({ top, behavior: 'smooth' })
	}

	return (
		<nav className='navbar'>
			<ul>
			</ul>
			<ul>
				<li>
					<a id='about-me' onClick={handleMoveTo}>
						Acerca de mí
					</a>
				</li>
				<li>
					<a id='technologies' onClick={handleMoveTo}>
						Tecnologías
					</a>
				</li>
				<li>
					<a id='skills' onClick={handleMoveTo}>
						Skills
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Header
