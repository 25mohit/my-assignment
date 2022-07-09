import './Header.css'

export const Header = ({ showTodo, currentState }) => {
    return(
        <div className="header">
            <button onClick={() => {showTodo(!currentState)}}>Show</button>
        </div>
    )
}