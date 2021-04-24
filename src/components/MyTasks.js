import Task from './Task'
const MyTasks = ({ tasks, onDelete }) => {
	return (
		<>
			{tasks.map((tsk)=>(
				<Task key={tsk.id} tsk={tsk} onDelete={onDelete}/>
				))
			}
		</>
	)
}

export default MyTasks