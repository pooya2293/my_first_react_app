import Task from './Task'
const MyTasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((tsk)=>(
				<Task key={tsk.id} tsk={tsk} />
				))
			}
		</>
	)
}

export default MyTasks