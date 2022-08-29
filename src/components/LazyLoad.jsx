import * as React from 'react'
import PropTypes from 'prop-types'
import useNearScreen from 'hooks/useNearScreen'

const LazyLoad = ({ children, style }) => {
	const { isNearScreen, elementRef } = useNearScreen({ distance: '100px' })
	return (
		<div className='container' style={style} ref={elementRef}>
			{isNearScreen ? children : <div aria-busy='true'/>}
		</div>
	)
}

LazyLoad.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object
}

export default LazyLoad