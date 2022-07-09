import './PendingTask.css'
import { useSelector, useDispatch } from 'react-redux'
import { PendingCard } from '../pendingCard/PendingCard'
import { FaTrashAlt } from 'react-icons/fa'

export const PendingTask = () => {
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const emptyPendingTodo = () => {
        dispatch({
            type:"EMPTY_PENDING_TODO"
        })
    }
    return(
        <div className="pending-task">
            {todos.length>0 ?
            <div className="pending-task-container">
                <div className="pending-head">
                    <h1 className="pending-heading">Pending Tasks <span>({todos.length})</span></h1>
                    <FaTrashAlt onClick={emptyPendingTodo} id='trash-emp'/>
                </div>
                    <div className="pending-map">
                        {
                            todos.map(todo => <PendingCard key={ todo.id } todo={ todo }/>)
                        }
                    </div>
            </div>:<p id='empty-pending-task'>To-Do list is Empty <br/>start adding new <br/><span>To-Do's</span></p>}
        </div>
    )
}