import { BsTrash } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { FaRegEdit } from 'react-icons/fa'
import { DeleteTodo } from '../deleteTodo/DeleteTodo'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import './CompleteCard.css'
import { EditModal } from '../editModal/EditModal'

export const CompleteCard = ({ todo }) => {
    const [showDelete, setShowDelete] = useState(false)
    const [taskId, setTaskId] = useState()
    const [changeColor, setChangeColor] = useState('')

    const dispatch = useDispatch()

    const deleteTask = (id) => {
        setShowDelete(true)
        // alert('no')
        setTaskId(id)
        // dispatch({
        //     type:"DELETE_COMPLATED_TODO",
        //     payload:id
        // })
    }

    useEffect(() => {
        if(todo.taskPriority ==  'high'){
            setChangeColor('high')
        }
        if(todo.taskPriority ==  'low'){
            setChangeColor('low')
        }
        if(todo.taskPriority ==  'medium'){
            setChangeColor('medium')
        }
    },[])
    return(
        <div className="complete-card">
            <div className={changeColor} />
            <div className="card-info">
                <div className="pending-info-header">
                        <p id='todo-name'>{ todo.taskName }</p>
                        <p className="todo-date">{ todo.taskDate }</p>
                </div>
                <p id='todo-desc'>{ todo.taskDescription }</p>
                <p id='todo-assi'>Assigned to : { todo.taskAssigned }</p>
                <p id='todo-prio'>Priority : <span id='pndg-spn'>{ todo.taskPriority }</span></p>
                <div className="pending-info-foote">
                    <p id='todo-dura'>Complate in { todo.taskDuration } Days</p>
                    <div className="pndg-foot-icon">
                        <BsTrash id='pndg-ico' onClick={() =>deleteTask(todo.id)}/>
                    </div>
                </div>
            </div>
            { showDelete && <DeleteTodo deleteTodo={setShowDelete} id={taskId}/>}
        </div>
    )
}