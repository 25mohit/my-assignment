import './InfoModal.css'
import { GiTireIronCross } from 'react-icons/gi'
import { useEffect } from 'react'

export const InfoModal = ({ setShowInfo }) => {
    
    let keyPressHandler = (e) => {
        if(e.keyCode == 27){
            setShowInfo(false)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler )
        return () => {
            document.removeEventListener('keydown', keyPressHandler)
        }
    },[])

    return(
        <div className="info-modal">
            <div className="info-modal-container">
                <div className="info-header">
                        <GiTireIronCross id='info-cls-bt' onClick={() => {setShowInfo(false)}}/>
                </div>
                <div className="info-div">
                    <h2 className="info-head-text">Some key Features of this To-Do App</h2>
                    <ul>
                        <li>Can add a To-Do based on <strong>Tittle</strong>, <strong>Date</strong>, <strong>Description</strong>, <strong>Assigned to</strong>, 
                        <strong>Priority</strong>, <strong>Duration</strong></li>
                        <li>Can <strong>Delete</strong>, <strong>Update</strong>, <strong>Complete Task</strong></li>
                        <li>Can Delete all To-Do at once</li>
                        <li>Can Delete all Completed To-Do at one.</li>
                        <li>Can Delete Completed To-Do one by one also.</li>
                        <li>Can Close all Modal Windows with <strong>ESC</strong> key as well.</li>
                    </ul>
                </div>  
            </div>
        </div>
    )
}