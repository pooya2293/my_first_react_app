import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Header = ({ title,onAdd,showAdd }) => {
	 
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Buttons color='green' text={showAdd?
				'Close':'Add'} Click={onAdd} />
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