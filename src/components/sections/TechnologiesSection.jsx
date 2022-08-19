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
import logoPHP from '../../assets/php-logo.svg'

const Technologies = React.lazy(() => import('../Technologies'))

const TechnologiesSection = () => {

	const frontEnd = [['Angular', logoAngular], ['React', logoReact], ['TypeScript', logoTs], ['JavaScript', logoJs], ['HTML', logoHtml], ['CSS', logoCss], ['SCSS', logoScss]]
	const backEnd = [['Node JS', logoNode], ['Java', logoJava], ['PHP', logoPHP]]

	return (
		<LazyLoad>
			<span>He utilizado las siguientes tecnologias:</span>
			<div className='container' style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
				<Technologies title='FrontEnd' icons={frontEnd} />
				<Technologies title='BackEnd' icons={backEnd} />
			</div>
		</LazyLoad>
	)
}

export default TechnologiesSection