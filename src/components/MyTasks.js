const MyTasks = ({ tasks }) => {
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