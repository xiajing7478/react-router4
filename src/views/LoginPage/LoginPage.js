import React from 'react'
// import { Link } from 'react-router-dom'
// import { getLoggedUser } from '../../reducers/loggedUserReducer'
import { login } from '../../utils/xhr'

class LoginPage extends React.Component {
	handleClick = () => {
		login().then(() => {
			this.props.history.push('/app')
		})
	}
	render() {
		return (
			<div>
				<h1>Login page</h1>
				<p>
					For this example application, we cannot visit <a href="/app" >/app</a> until we are logged in.
					Clicking the "Login" button will simulate a login by setting Redux state. This example compliments
					the CSS-Tricks article I wrote for <a  href="https://css-tricks.com/react-router-4/">React Router
					4</a>.
				</p>
				<button onClick={this.handleClick}> Login</button>
			</div>
		)
	}
}


// const LoginPage = ({history}) => {
// 	handleClick = () => {
// 		login().then(() => {
// 			history.push('/app')
// 		})
// 	}
// 	return (
// 		<div>
// 			<h1>Login page</h1>
// 			<p>
// 				For this example application, we cannot visit <Link to="/app">/app</Link> until we are logged in.
// 				Clicking the "Login" button will simulate a login by setting Redux state. This example compliments
// 				the CSS-Tricks article I wrote for <a target="_blank" href="https://css-tricks.com/react-router-4/">React Router
// 				4</a>.
// 			</p>
// 			<button onClick={this.handleClick}> Login</button>
// 		</div>
// 		)
// }
export default LoginPage
