import { FaTimes } from 'react-icons/fa'
const Task = ({ tsk, onDelete }) => {
	return (
		<div className='task'>
			<h3>
				{tsk.text} 
				<FaTimes 
				style={{color:'red'}} 
				onClick={()=>onDelete(tsk.id)} /> 
			</h3>
			<p>{tsk.day}</p>
		</div>
	)
}

export default Task