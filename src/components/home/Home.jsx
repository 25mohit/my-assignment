import { CompletedTask } from "../completedTask/CompletedTask"
import { PendingTask } from "../pendingTask/PendingTask"
import './Home.css'

export const Home = () => {
    return(
        <div className="home">
            <PendingTask />
            <CompletedTask />
        </div>
    )
}