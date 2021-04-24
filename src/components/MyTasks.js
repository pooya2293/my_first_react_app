import { useState } from 'react'
const MyTasks = () => {
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
	return (
		<>
			{tasks.map((n)=>(
				<h3 key={n.id}>{n.text}</h3>
				))
			}
		</>
	)
}

export default MyTasks