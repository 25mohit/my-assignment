import './EditModal.css'
import { GiTireIronCross } from 'react-icons/gi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const EditModal = ({ showEdit, updateTask }) => {

    const [taskName, setTaskName] = useState(updateTask.taskName)
    const [taskDescription, setTaskDescription] = useState(updateTask.taskDescription)
    const [taskDate, setTaskDate] = useState(updateTask.taskDate)
    const [taskAssigned, setTaskAssigned] = useState(updateTask.taskAssigned)
    const [taskPriority, setTaskPriority] = useState(updateTask.taskPriority)
    const [taskDuration, setTaskDuration] = useState(updateTask.taskDuration)
    const [id, setId] = useState(updateTask.tId)

    const dispatch = useDispatch()

    const updateTodo = (e) => {
        e.preventDefault()
        dispatch({
            type:"UPDATE_PENDING_TODO",
            payload:{
                id, taskName, taskDate, taskDescription, taskAssigned, taskPriority, taskDuration
            }
        })
        // console.log(updateTask);
    }

    return(
        <div className="edit-modal">
                <div className="container-edit-modal">
                        <div className="edit-header">
                            <GiTireIronCross onClick={() => showEdit(false)}/>
                        </div>
                        <form action="submit" className="edit-modal-frm">
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
                            <button className="submit-modal" onClick={ updateTodo }>Add Todo</button>
                        </form>
                </div>
        </div>
    )
}