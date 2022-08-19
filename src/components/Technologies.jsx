import * as React from 'react'
import Technology from './Technology'
import PropTypes from 'prop-types'

const Technologies = ({ title, icons }) => {
	const accordionStyle = {
		padding: '30px',
		display: 'flex',
		flexDirection: 'row'
	}

	return (
		<>
			<span style={{ fontStyle: 'bold' }}>{title}</span>
			<div style={accordionStyle}>
				{icons.map(([title, icon], index) => <Technology key={index} title={title} img={icon} />)}
			</div >
		</>
	)
}

Technologies.propTypes = {
	title: PropTypes.string,
	icons: PropTypes.array
}

export default Technologies 