import PropTypes from 'prop-types'

const Accordion = ({ id, title, children }) => {
	const accordionStyle = {
		paddingBottom: '20px'
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
	id: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default Accordion
