import './EditModal.css'
import { GiTireIronCross } from 'react-icons/gi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const EditModal = ({ showEdit, updateTask }) => {

    const [taskName, setTaskName] = useState(updateTask.taskName)
    const [taskDescription, setTaskDescription] = useState(updateTask.taskDescription)
    const [taskDate, setTaskDate] = useState(updateTask.taskDate)
    const [taskAssigned, setTaskAssigned] = useState(updateTask.taskAssigned)
    const [taskPriority, setTaskPriority] = useState(updateTask.taskPriority)
    const [taskDuration, setTaskDuration] = useState(updateTask.taskDuration)
    const [id, setId] = useState(updateTask.tId)
    const [nFocus, setNFocus] = useState(false)
    const [dFocus, setDFocus] = useState(false)
    const [dtFocus, setDtFocus] = useState(false)
    const [aFocus, setAFocus] = useState(false)
    const [pFocus, setPFocus] = useState(false)
    const [duFocus, setDuFocus] = useState(false)

    const dispatch = useDispatch()

    const updateTodo = (e) => {
        e.preventDefault()
        if(taskName && taskDescription&& taskDate && taskAssigned && taskPriority && taskDuration){
            dispatch({
                type:"UPDATE_PENDING_TODO",
                payload:{
                    id, taskName, taskDate, taskDescription, taskAssigned, taskPriority, taskDuration
                }
            })
            showEdit(false)
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
        <div className="edit-modal">
                <div className="container-edit-modal">
                        <div className="edit-header">
                            <h1 className="edit-header-text">Edit To-Do</h1>
                            <GiTireIronCross onClick={() => showEdit(false)} className='modal-close-bt'/>
                        </div>
                        <form action="submit" className="edit-modal-frm">
                        <label htmlFor="taskName">Tittle</label>
                            <input id='inpt-nm' type="text" value={ taskName } onInput={() => setNFocus(true)} focused={nFocus.toString()} onChange={e => setTaskName(e.target.value)} name='taskName' placeholder='enter what you want to do 'required/>
                            <span className="err-nm">Name Field is required *</span>
                            <div className="flex-div">
                                <div className="just-dv">
                                        <label htmlFor="taskDate">Date</label>
                                        <input id='inpt-dt' type="date" onInput={() => setDFocus(true)} focused={dFocus.toString()} value={ taskDate } onChange={e => setTaskDate(e.target.value)} required/>
                                        <span className="err-dt">Date Field is required</span>
                                </div>
                                <div className="just-dv">
                                        <label htmlFor="taskProiority">Priority</label>
                                        <select id='inpt-pr' name="taskProiority" onInput={() => setPFocus(true)} focused={pFocus.toString()} value={ taskPriority } onChange={e => setTaskPriority(e.target.value)}  >
                                            <option value="" disabled>Select</option>
                                            <option value="high">High</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                        </select><br/>
                                        <span className="err-pri">Priority  is required</span>
                                </div>
                            </div>
                            <label htmlFor="taskName">Discription</label>
                            <input id='inpt-ds' type="text"  value={ taskDescription } onInput={() => setDtFocus(true)} focused={dtFocus.toString()} onChange={e => setTaskDescription(e.target.value)} name='taskName' placeholder='enter what you want to do 'required/>
                            <span className="err-ds">Task Description is required *</span>
                            <label htmlFor="taskName">Assigned to</label>
                            <input id='inpt-as' type="text" value={ taskAssigned } onInput={() => setAFocus(true)} focused={aFocus.toString()}  onChange={e => setTaskAssigned(e.target.value)}  name='taskName' placeholder='enter what you want to do 'required/>
                            <span className="err-as">Task assignmed to field is required *</span>
                            <label htmlFor="taskDuration">Duration</label>
                            <input id='inpt-du' type="text" value={ taskDuration }  onInput={() => setDuFocus(true)} focused={duFocus.toString()} onChange={e => setTaskDuration(e.target.value)}  name='taskDuration' placeholder='Duration (days)'required/>
                            <span className="err-du">Please enter your To-Do's Duration *</span>
                            <button className="submit-modal" onClick={ updateTodo }>Update Todo</button>
                        </form>
                </div>
        </div>
    )
}