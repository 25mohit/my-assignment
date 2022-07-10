import './TodoModal.css'
import { GiTireIronCross } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export const TodoModal = ({ showTodo }) => {

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssigned, setTaskAssigned] = useState('')
    const [taskPriority, setTaskPriority] = useState('')
    const [taskDuration, setTaskDuration] = useState('')
    const [nFocus, setNFocus] = useState(false)
    const [dFocus, setDFocus] = useState(false)
    const [dtFocus, setDtFocus] = useState(false)
    const [aFocus, setAFocus] = useState(false)
    const [pFocus, setPFocus] = useState(false)
    const [duFocus, setDuFocus] = useState(false)

    const dispatch = useDispatch()
   
    let keyPressHandler = (e) => {
        if(e.keyCode == 27){
            showTodo(false)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler )
        return () => {
            document.removeEventListener('keydown', keyPressHandler)
        }
    },[])

    const addTodo = (e) => {
        e.preventDefault()
        if(taskName && taskDescription&& taskDate && taskAssigned && taskPriority && taskDuration){
            dispatch({
                type:"ADD_TOTO",
                payload:{
                    id: new Date().getTime(),
                    taskName, taskDescription, taskDate, taskAssigned, taskPriority, taskDuration
                }
            })
            showTodo(false)
        }else{
            setNFocus(true)
            setDFocus(true)
            setDtFocus(true)
            setAFocus(true)
            setPFocus(true)
            setDuFocus(true)
        }
    }
    return(
        <div className="todo-modal">
                <div className="todo-container">
                    <div className="modal-header">
                            <h1 className="modal-header-text">Add To-Do</h1>
                            <button onClick={() => {showTodo(false)}} className='modal-close-bt'><GiTireIronCross /></button>
                    </div>
                    <form action="submit" className="todo-frm">
                            <label htmlFor="taskName">Tittle</label>
                            <input id='inpt-nm' type="text" value={ taskName } onInput={() => setNFocus(true)} focused={nFocus.toString()} onChange={e => setTaskName(e.target.value)} name='taskName' placeholder='enter what you want to do ' required/>
                            <span className="err-nm">Name Field is required *</span>
                            <div className="flex-div">
                                <div className="just-dv">
                                    <label htmlFor="taskDate">Date</label>
                                    <input id='inpt-dt' type="date"  onInput={() => setDFocus(true)} focused={dFocus.toString()} value={ taskDate } onChange={e => setTaskDate(e.target.value)}  required/>
                                    <span className="err-dt">Date Field is required</span>
                                </div>
                                <div className="just-dv">
                                    <label htmlFor="taskProiority">Priority</label>
                                    <select id='inpt-pr' name="taskProiority" onInput={() => setPFocus(true)} focused={pFocus.toString()} value={ taskPriority } onChange={e => setTaskPriority(e.target.value)}  required>
                                        <option value="" disabled>Select</option>
                                        <option value="high">High</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                    </select><br />
                                    <span className="err-pri">Priority  is required</span>
                                </div>
                            </div>
                            <label htmlFor="taskName">Discription</label>
                            <input id='inpt-ds' type="text"  onInput={() => setDtFocus(true)} focused={dtFocus.toString()} value={ taskDescription } onChange={e => setTaskDescription(e.target.value)} name='taskName' placeholder='enter what you want to do ' required/>
                            <span className="err-ds">Task Description is required *</span>
                            <label htmlFor="taskName">Assigned to</label>
                            <input id='inpt-as' type="text" onInput={() => setAFocus(true)} focused={aFocus.toString()} value={ taskAssigned } onChange={e => setTaskAssigned(e.target.value)}  name='taskName' placeholder='enter what you want to do ' required/>
                            <span className="err-as">Task assignmed to field is required *</span>
                            <label htmlFor="taskDuration">Duration</label>
                            <input id='inpt-du' type="number" onInput={() => setDuFocus(true)} focused={duFocus.toString()} value={ taskDuration } onChange={e => setTaskDuration(e.target.value)}  name='taskDuration' placeholder='Duration (days)' required/>
                            <span className="err-du">Please enter your To-Do's Duration *</span>
                            <button className="submit-modal" onClick={ addTodo }>Add Todo</button>
                    </form>
                </div>
        </div>
    )
}