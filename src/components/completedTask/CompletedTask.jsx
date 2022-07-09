import './CompletedTask.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { PendingCard } from '../pendingCard/PendingCard';
import { FaTrashAlt } from 'react-icons/fa'
import { CompleteCard } from '../completeCard/ComplateCard';

export const CompletedTask = () => {
    const complated = useSelector(state => state.completedTodo)
    // console.log(complated);

    const dispatch = useDispatch()

    const emptyCompleteTodo = () => {
        dispatch({
            type:"EMPTY_COMPLETED_TODO"
        })
    }

    return(
        <div className="completed-task">
            <div className="pending-task-container">
                <div className="pending-head">
                    <h1 className="pending-heading">Completed Tasks</h1>
                    <FaTrashAlt onClick={emptyCompleteTodo} id='trash-emp'/>
                </div>
                    <div className="pending-map">
                        { complated && complated.map(todo=><CompleteCard key={todo.id} todo={ todo }/>)}
                    </div>
            </div>
        </div>
    )
}