import Header from './components/Header'
import MyTasks from './components/MyTasks'
import { useState } from 'react'
function App() {
const [tasks, setTasks] = useState([
	{
		id:1,
		text:'move body',
		day:'00/01/28 at 08:00am',
		reminder: true,
	},
	{
		id:2,
		text:'Reading chef Book',
		day:'00/01/31 at 12:00am',
		reminder: false,
	},
	{
		id:3,
		text:'Buy a T-shirt',
		day:'00/02/05 at 08:00am',
		reminder: true,
	}
])

// Delete tsk
const deletTask = (id)=>{
	setTasks(tasks.filter((tsk)=>
		tsk.id !== id
	))
}

// toggle reminder 
const reminder = (id)=>{
	setTasks(
		tasks.map((tsk) =>
			tsk.id === id ? 
			{...tsk, reminder:!tsk.reminder} 
			: tsk
		)
	)
}

	return (
		<div className='container'>
			<Header />
			{tasks.length ? <MyTasks tasks={tasks} onDelete={deletTask} onToggle={reminder} /> : 'no task for show'}
		</div>
	)
}

export default App