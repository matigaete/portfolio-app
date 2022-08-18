import * as React from 'react'
import PropType from 'prop-types'

const Accordion = ({ id, title, children }) => {
	const accordionStyle = {
		paddingBottom: '50px'
	}

	return (
		<div className={`container ${id}`} style={accordionStyle}>
			<details>
				<summary>{title}</summary>
				{children}
			</details>
		</div>
	)
}

Accordion.propTypes = {
	id: PropType.string,
	title: PropType.string,
	children: React.Component
}

export default Accordion