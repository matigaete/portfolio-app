import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import PropType from 'prop-types'

const LazyLoad = ({ children, style }) => {
	const [show, setShow] = useState(false)
	const elementRef = useRef()

	useEffect(() => {
		const onChange = (entries, observer) => {
			const el = entries[0]
			if (el.isIntersecting) {
				setShow(true)
				observer.disconnect()
			}
		}
		const observer = new IntersectionObserver(onChange, {
			rootMargin: '100px'
		})
		observer.observe(elementRef.current)

		return () => observer.disconnect()
	})

	return (
		<div className='container' style={style} ref={elementRef}>
			{show ? children : null}
		</div>
	)
}

LazyLoad.propTypes = {
	children: React.Component,
	style: PropType.object
}

export default LazyLoad