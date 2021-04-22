import PropTypes from 'prop-types'

const Buttons = ({ color,text }) => {
	return (
		<button style={{ backgroundColor: color }}
		 className='btn'>
		 	{text}
		 </button>
	)
}

Buttons.defaultProps = {
	color: 'steelblue'
}

Buttons.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string
}

export default Buttons