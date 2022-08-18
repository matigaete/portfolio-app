import * as React from 'react'
import PropType from 'prop-types'

const Accordion = ({ id, title, children }) => {
	return (
		<div className={`container ${id}`}>
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