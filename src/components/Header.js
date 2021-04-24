import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Header = ({ title }) => {
	const click = ()=> {
			console.log('cd');
		} 
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Buttons color='green' text='Add' onClick={click} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string,
}

// css in js
// const headingStyle = {
// 	color:'red',
// 	backgroundColor:'#000'
// }

export default Header