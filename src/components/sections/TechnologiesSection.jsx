import { lazy, useEffect, useState } from 'react'
import LazyLoad from '../LazyLoad'
const Technologies = lazy(() => import('../Technologies'))

const TechnologiesSection = () => {
	const [frameworks, setFrameworks] = useState([])
	const [tools, setTools] = useState([])
	useEffect(() => {
		const frameworks = [
			{ title: 'Angular', icon: 'angular-logo' },
			{ title: 'React', icon: 'react-logo' },
			{ title: 'TypeScript', icon: 'ts-logo' },
			{ title: 'JavaScript', icon: 'js-logo' },
			{ title: 'HTML', icon: 'html-5-logo' },
			{ title: 'CSS', icon: 'css-logo' },
			{ title: 'SCSS', icon: 'scss-logo' },
			{ title: 'Node JS', icon: 'node-js-logo' },
			{ title: 'Java', icon: 'java-logo' }
		]
		const tools = [
			{ title: 'VSCode', icon: 'vscode-logo' },
			{ title: 'Intellij', icon: 'intellij-logo' },
			{ title: 'ChatGPT', icon: 'chatGPT-logo' },
			{ title: 'SourceTree', icon: 'sourcetree-logo' },
			{ title: 'Github', icon: 'github-logo' },
			{ title: 'Notions', icon: 'notion-logo' }
		]
		setFrameworks(frameworks)
		setTools(tools)
	}, [])

	return (
		<LazyLoad className='technologies-section'>
			<h2>Tecnologías</h2>
			<h4>He utilizado las siguientes tecnologias:</h4>
			<div className='container technologies'>
				<Technologies title='Tecnologías' icons={frameworks} />
				<Technologies title='Herramientas' icons={tools} />
			</div>
		</LazyLoad>
	)
}

export default TechnologiesSection
