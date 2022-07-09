import './TodoModal.css'
import { GiTireIronCross } from 'react-icons/gi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const TodoModal = ({ showTodo }) => {

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssigned, setTaskAssigned] = useState('')
    const [taskPriority, setTaskPriority] = useState('')
    const [taskDuration, setTaskDuration] = useState('')

    const dispatch = useDispatch()

    const addTodo = (e) => {
        e.preventDefault()
        dispatch({
            type:"ADD_TOTO",
            payload:{
                id: new Date().getTime(),
                taskName, taskDescription, taskDate, taskAssigned, taskPriority, taskDuration
            }
        })
        alert('Done')
    }
    return(
        <div className="todo-modal">
                <div className="todo-container">
                    <div className="modal-header">
                            <h1 className="modal-header">Add Todo</h1>
                            <button onClick={() => {showTodo(false)}} className='modal-close-bt'><GiTireIronCross /></button>
                    </div>
                    <form action="submit" className="todo-frm">
                            <label htmlFor="taskName">Tittle</label>
                            <input type="text" value={ taskName } onChange={e => setTaskName(e.target.value)} name='taskName' placeholder='enter what you want to do '/>
                            <label htmlFor="taskDate">Date</label>
                            <input type="date"  value={ taskDate } onChange={e => setTaskDate(e.target.value)} />
                            <label htmlFor="taskName">Discription</label>
                            <input type="text"  value={ taskDescription } onChange={e => setTaskDescription(e.target.value)} name='taskName' placeholder='enter what you want to do '/>
                            <label htmlFor="taskName">Assigned to</label>
                            <input type="text" value={ taskAssigned } onChange={e => setTaskAssigned(e.target.value)}  name='taskName' placeholder='enter what you want to do '/>
                            <label htmlFor="taskProiority">Priority</label>
                            <select name="taskProiority" value={ taskPriority } onChange={e => setTaskPriority(e.target.value)}  id="">
                                <option value="" disabled>Select</option>
                                <option value="high">High</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                            </select>
                            <label htmlFor="taskDuration">Duration</label>
                            <input type="text" value={ taskDuration } onChange={e => setTaskDuration(e.target.value)}  name='taskDuration' placeholder='Duration (days)'/>
                            <button className="submit-modal" onClick={ addTodo }>Add Todo</button>
                    </form>
                </div>
        </div>
    )
}