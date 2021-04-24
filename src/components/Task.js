const Task = ({ tsk }) => {
	return (
		<div className='task'>
			<h3>{tsk.text}</h3>
			<h3>{tsk.day}</h3>
		</div>
	)
}

export default Task