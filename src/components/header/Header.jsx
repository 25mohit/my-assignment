import './Header.css'

export const Header = ({ showTodo, currentState }) => {
    return(
        <div className="header">
            <button onClick={() => {showTodo(!currentState)}} id='header-bt'>Add TODO</button>
        </div>
    )
}