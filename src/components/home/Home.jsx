import { CompletedTask } from "../completedTask/CompletedTask"
import { PendingTask } from "../pendingTask/PendingTask"
import './Home.css'

export const Home = () => {
    return(
        <div className="home">
            <div className="p-tsk-div">

            <PendingTask />
            </div>
            <div className="p-cmp-ts">

            <CompletedTask />
            </div>
        </div>
    )
}