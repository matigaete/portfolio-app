import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

import Header from './components/Header'
import Footer from './components/Footer'
import Presentation from './components/Presentation'
import AboutMeSection from 'components/sections/AboutMeSection'
import TechnologiesSection from 'components/sections/TechnologiesSection'
import SkillsSection from 'components/sections/SkillsSection'

function App() {
	const isMobile = useMediaQuery('not (min-width:480px)')

	return (
		<BrowserRouter>
			<Header />
			<section className='container'>
				<img
					className='background'
					src={
						isMobile ? 'assets/wallpaper-mobile.jpeg' : 'assets/wallpaper.jpeg'
					}
				/>

				<Routes>
					<Route exact path='/' element={<Presentation />} />
					<Route path='/about-me' element={<AboutMeSection />} />
					<Route path='/technologies' element={<TechnologiesSection />} />
					<Route path='/skills' element={<SkillsSection />} />
				</Routes>
			</section>
			<Footer />
		</BrowserRouter>
	)
}

export default App
