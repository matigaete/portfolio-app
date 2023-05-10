import { useEffect, useRef, useState } from 'react'

const useNearScreen = ({ distance }) => {
	const [isNearScreen, setNearScreen] = useState(false)
	const elementRef = useRef()
	useEffect(() => {
		const onChange = (entries, observer) => {
			const el = entries[0]
			if (el.isIntersecting) {
				setNearScreen(true)
				observer.disconnect()
			}
		}
		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance
		})
		observer.observe(elementRef.current)

		return () => observer.disconnect()
	})

	return { isNearScreen, elementRef }
}

export default useNearScreen
