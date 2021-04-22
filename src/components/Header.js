import PropTypes from 'prop-types'

const Header = ({ title }) => {
	return (
		<header>
			<h1 style={{color:'red',backgroundColor:'#000'}}>
			{title}
			</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string,
}

export default Header