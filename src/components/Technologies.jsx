import Technology from './Technology'
import PropTypes from 'prop-types'

const Technologies = ({ title, icons }) => {
	return (
		<>
			<span style={{ fontStyle: 'bold' }}>{title}</span>
			<div className='accordion'>
				{icons.map(({ title, icon }, index) => (
					<Technology key={index} title={title} img={icon} />
				))}
			</div>
		</>
	)
}

Technologies.propTypes = {
	title: PropTypes.string,
	icons: PropTypes.array
}

export default Technologies
