import Task from './Task'
const MyTasks = ({ tasks,onDelete,onToggle }) => {
	return (
		<>
			{tasks.map((tsk)=>(
				<Task 
					key={tsk.id} 
					tsk={tsk} 
					onDelete={onDelete}
					onToggle={onToggle}
				/>
				))
			}
		</>
	)
}

export default MyTasks