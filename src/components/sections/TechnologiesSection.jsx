import * as React from 'react'
import LazyLoad from '../LazyLoad'

import logoAngular from '../../assets/angular-logo.svg'
import logoReact from '../../assets/react-logo.svg'
import logoTs from '../../assets/ts-logo.svg'
import logoJs from '../../assets/js-logo.svg'
import logoNode from '../../assets/node-js-logo.svg'
import logoHtml from '../../assets/html-5-logo.svg'
import logoCss from '../../assets/css-logo.svg'
import logoScss from '../../assets/scss-logo.svg'
import logoJava from '../../assets/java-logo.svg'

import logoVS from '../../assets/vscode-logo.svg'
import logoSourceTree from '../../assets/sourcetree-logo.svg'
import logoGithub from '../../assets/github-logo.svg'
import logoIntellij from '../../assets/intellij-logo.svg'
import logoChatGPT from '../../assets/chatGPT-logo.svg'
import logoNotion from '../../assets/notion-logo.svg'

const Technologies = React.lazy(() => import('../Technologies'))

const TechnologiesSection = () => {
	const frameworks = [
		{ title: 'Angular', icon: logoAngular },
		{ title: 'React', icon: logoReact },
		{ title: 'TypeScript', icon: logoTs },
		{ title: 'JavaScript', icon: logoJs },
		{ title: 'HTML', icon: logoHtml },
		{ title: 'CSS', icon: logoCss },
		{ title: 'SCSS', icon: logoScss },
		{ title: 'Node JS', icon: logoNode },
		{ title: 'Java', icon: logoJava }
	]
	const tools = [
		{ title: 'VSCode', icon: logoVS },
		{ title: 'Intellij', icon: logoIntellij },
		{ title: 'ChatGPT', icon: logoChatGPT },
		{ title: 'SourceTree', icon: logoSourceTree },
		{ title: 'Github', icon: logoGithub },
		{ title: 'Notions', icon: logoNotion }
	]

	return (
		<LazyLoad className='technologies-section'>
			<h2>Tecnologías</h2>
			<span>He utilizado las siguientes tecnologias:</span>
			<div className='container technologies'>
				<Technologies title='Tecnologías' icons={frameworks} />
				<Technologies title='Herramientas' icons={tools} />
			</div>
		</LazyLoad>
	)
}

export default TechnologiesSection
