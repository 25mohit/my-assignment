import './PendingCard.css'
import { BsTrash } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { FaRegEdit } from 'react-icons/fa'
import { DeleteTodo } from '../deleteTodo/DeleteTodo'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { EditModal } from '../editModal/EditModal'

export const PendingCard = ({ todo }) => {
    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [taskId, setTaskId] = useState()
    const [changeColor, setChangeColor] = useState('')
    const [updateTask, setUpdateTask] = useState({tId:'', taskName:'', taskDate:'', taskDescription:'', taskAssigned:'', taskPriority:'',taskDuration:''})

    const dispatch = useDispatch()

    const deleteTask = ( id ) => {
        setShowDelete(true)
        setTaskId(id)
        console.log(id);
    }
    const completeTodo = () => {
        dispatch({
            type:"COMPLETED_TODO",
            payload: todo
        })
        dispatch({
            type:"DELETE_TODO",
            payload: todo.id
        })
    }

    const updateTodo = (id, tName, tDate, tDesc, tAssign, tPrio, tDura) => {
        setShowEdit(true)
        setUpdateTask({tId: id, taskName: tName, taskDate: tDate, taskDescription: tDesc,taskAssigned:tAssign, taskPriority: tPrio,  taskDuration: tDura})
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
    },[showEdit])
    
    return(
        <div className="pending-card">
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
                        <FaRegEdit id='pndg-ico' onClick={() => updateTodo(
                            todo.id,
                            todo.taskName,
                            todo.taskDate,
                            todo.taskDescription,
                            todo.taskAssigned,
                            todo.taskPriority,
                            todo.taskDuration
                        )}/>
                        <GiCheckMark id='pndg-ico-c' onClick={ completeTodo }/>
                    </div>
                </div>
            </div>
            { showDelete && <DeleteTodo deleteTodo={ setShowDelete } id={ taskId }/>}
            { showEdit && <EditModal showEdit={ setShowEdit } updateTask={ updateTask }/>}
        </div> 
    )
}
