import './CompletedTask.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { FaTrashAlt } from 'react-icons/fa'
import { CompleteCard } from '../completeCard/ComplateCard';

export const CompletedTask = () => {
    const completed = useSelector(state => state.completedTodo)
    // console.log(complated);

    const dispatch = useDispatch()

    const emptyCompleteTodo = () => {
        dispatch({
            type:"EMPTY_COMPLETED_TODO"
        })
    }

    return(
        <div className="completed-task">
            {completed.length>0 ?
            <div className="completed-task-container">
                <div className="completed-head">
                    <h1 className="completed-heading">Completed Tasks<span>({completed.length})</span></h1>
                    <FaTrashAlt onClick={emptyCompleteTodo} id='trash-emp'/>
                </div>
                    <div className="completed-map">
                        { completed && completed.map(todo=><CompleteCard key={todo.id} todo={ todo }/>)}
                    </div>
            </div>: <p></p>}
        </div>
    )
}