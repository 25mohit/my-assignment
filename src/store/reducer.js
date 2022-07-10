import { createStore } from "redux"

const initialState = {
    todos:[],
    completedTodo:[],
    filteredTodo:[],
    appliedFilters:{}
}
    const getFilteredTodo = (todos, filters) => {
        let filteredTodo = todos
        for(const[filterName, value ] of Object.entries(filters)) {
            if(filterName == "high"){
                filteredTodo = filteredTodo.filter( todo => {
                    if(todo.taskPriority.toLowerCase().includes(value.toLowerCase())){
                        return todo
                    }
                })
            }
        }
        return filteredTodo
    }




const reducer = (state= initialState , action) => {
    let newState = Object.assign({}, state);
    switch(action.type){
        case "ADD_TOTO":
            return{
                ...state,
                todos:[...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return{
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }
        case "DELETE_COMPLATED_TODO":
            return{
                ...state,
                completedTodo:state.completedTodo.filter(todo => todo.id !== action.payload)
            }
        case "EMPTY_PENDING_TODO":
            return{
                ...state,
                todos:[]
            }
        case "UPDATE_PENDING_TODO":
            const findIndex = state.todos.findIndex(todo => todo.id == action.payload.id)
            if(findIndex>=0){
                state.todos[findIndex].taskName=action.payload.taskName
                state.todos[findIndex].taskDate=action.payload.taskDate
                state.todos[findIndex].taskDescription=action.payload.taskDescription
                state.todos[findIndex].taskAssigned=action.payload.taskAssigned
                state.todos[findIndex].taskPriority=action.payload.taskPriority
                state.todos[findIndex].taskDuration=action.payload.taskDuration
            }
        case "EMPTY_COMPLETED_TODO":
            return{
                ...state,
                completedTodo:[]
            }
        case "COMPLETED_TODO":
            return{
                ...state,
                completedTodo:[...state.completedTodo, action.payload]
            }
        case "FILTER_BY_PRIORITIE":
            let sPriotrie = action.payload.taskPriority;
            if(sPriotrie){
                state.appliedFilters.high = sPriotrie
            }else{
                delete state.appliedFilters.high
            }
            newState.filteredTodo = getFilteredTodo(state.todos, state.appliedFilters)
            return newState;

        default:
            return state;
    }
}
export default createStore(reducer)