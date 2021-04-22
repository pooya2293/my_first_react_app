import PropTypes from 'prop-types'

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<button className='btn'>Add</button>
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