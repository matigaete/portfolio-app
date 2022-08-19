export const sendMail = async (name, email, problem) => {
	const { REACT_APP_API_KEY, REACT_APP_API_HOST, REACT_APP_API } = process.env

	const body = {
		personalizations: [{
			to: [
				{
					email: 'mati.gaete.ponce@gmail.com'
				}],
			subject: `Contacto, ${name}`
		}],
		from: {
			email: email
		},
		content: [{
			type: 'text/plain',
			value: problem
		}]
	}
	const options = {
		method: 'POST',
		mode: 'cors',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': REACT_APP_API_KEY,
			'X-RapidAPI-Host': REACT_APP_API_HOST,
		},
		body: JSON.stringify(body)
	}
	console.log(options)
	return fetch(REACT_APP_API, options)
		.then(response => response.json())
}