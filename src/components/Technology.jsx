import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types'

const Technology = ({ title, img }) => {
	return (
		<div className='container technology'>
			<ReactSVG src={`logos/${img}.svg`}></ReactSVG>
			<span>{title}</span>
		</div>
	)
}

Technology.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
}

export default Technology
