import { useState } from 'react'

const AddTask = () => {
	const {text,setText} = useState('')
	const {day,setDay} = useState('')
	const {reminder,setReminder} = useState('')
	return (
		<form className='add-form'>
			<div className='form-control'>
				<lable>Task</lable>
				<input type="text" placeholder='Add Task' />
			</div>
			<div className='form-control'>
				<lable>Day & Time</lable>
				<input type="text" placeholder='Add Day & Time' />
			</div>
			<div className='form-control form-control-check'>
				<lable>Set reminder</lable>
				<input type="checkbox" />
			</div>
			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	)
}

export default AddTask