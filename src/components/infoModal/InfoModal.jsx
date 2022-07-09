import './InfoModal.css'
import { GiTireIronCross } from 'react-icons/gi'

export const InfoModal = ({ setShowInfo }) => {
    return(
        <div className="info-modal">
            <div className="info-modal-container">
                <div className="info-header">
                        <GiTireIronCross id='info-cls-bt' onClick={() => {setShowInfo(false)}}/>
                </div>
            </div>
        </div>
    )
}