import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types'

const Technology = ({ title, img }) => {
	return (
		<div className='container' style={{ textAlign: 'center' }}>
			<ReactSVG src={img}></ReactSVG>
			<span>{title}</span>
		</div>
	)
}

Technology.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
}

export default Technology
