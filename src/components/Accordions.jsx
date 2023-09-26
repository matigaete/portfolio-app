import TechnologiesSection from './sections/TechnologiesSection'
import AboutMeSection from './sections/AboutMeSection'
import SkillsSection from './sections/SkillsSection'
import '../styles/Accordions.css'

const Accordions = () => {
	return (
		<section className='container'>
			<AboutMeSection />
			<TechnologiesSection />
			<SkillsSection />
		</section>
	)
}

export default Accordions
