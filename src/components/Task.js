import { FaTimes } from 'react-icons/fa'
const Task = ({ tsk }) => {
	return (
		<div className='task'>
			<h3>{tsk.text} <FaTimes /> </h3>
			<h3>{tsk.day}</h3>
		</div>
	)
}

export default Task