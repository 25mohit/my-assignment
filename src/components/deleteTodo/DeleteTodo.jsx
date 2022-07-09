import './DeleteTodo.css'
import { useDispatch } from 'react-redux/es/exports'

export const DeleteTodo = ({ deleteTodo, id }) => {
    const dispatch = useDispatch()

    const deleteTask = () => {
        dispatch({
            type:"DELETE_TODO",
            payload: id
        })
        dispatch({
            type:"DELETE_COMPLATED_TODO",
            payload: id
        })
        console.log(id);

    }

    return(
        <div className="delete-todo">
                <div className="delete-todo-container">
                    <h1 className="delete-head">
                        Are you sure, you want to Delete ?
                    </h1>
                    <div className="dt-crd-dv">
                        <button id='dt-dv-bt' onClick={() => {deleteTodo(false)}}>Cancel</button>
                        <button id='dt-dv-bt-y' onClick={deleteTask}>Yes</button>
                    </div>
                </div>
        </div>
    )
}
