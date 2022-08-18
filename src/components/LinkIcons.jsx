import * as React from 'react'
import { ReactSVG } from 'react-svg'
import PropType from 'prop-types'

const LinkIcon = ({ link, img }) => {
	const anchorStyle = {
		borderRadius: '50px',
		marginRight: '15px'
	}

	return (
		<a href={link} style={anchorStyle}>
			<ReactSVG src={img}></ReactSVG>
		</a>
	)
}

LinkIcon.propTypes = {
	link: PropType.string,
	img: PropType.string
}

export default LinkIcon