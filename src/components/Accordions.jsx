import Accordion from './Accordion'
import ContactForm from './ContactForm'
import TechnologiesSection from './sections/TechnologiesSection'
import AboutMeSection from './sections/AboutMeSection'
import SkillsSection from './sections/SkillsSection'
import '../styles/Accordions.css'

const Accordions = () => {
	return (
		<section className='container'>
			<Accordion id='about-me' title='Acerca de mi'>
				<AboutMeSection />
			</Accordion>
			<Accordion id='technologies' title='Tecnologías'>
				<TechnologiesSection />
			</Accordion>
			<Accordion id='skills' title='Skills'>
				<SkillsSection />
			</Accordion>
		</section>
	)
}

export default Accordions
