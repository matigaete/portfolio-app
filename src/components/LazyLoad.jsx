import PropTypes from 'prop-types'
import useNearScreen from 'hooks/useNearScreen'
import { Suspense } from 'react'

const LazyLoad = ({ children, style, className }) => {
	const { isNearScreen, elementRef } = useNearScreen({ distance: '100px' })
	return (
		<div className={`container ${className}`} style={style} ref={elementRef}>
			<Suspense fallback={<div aria-busy='true' />}>
				{isNearScreen ? children : <div aria-busy='true' />}
			</Suspense>
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
