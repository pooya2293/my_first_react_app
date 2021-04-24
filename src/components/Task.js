import { FaTimes } from 'react-icons/fa'
const Task = ({ tsk,onDelete,onToggle }) => {
	return (
		<div className='task'
		onClick={()=>onToggle(tsk.id)}>
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