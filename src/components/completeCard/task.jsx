// import { useState, useEffect} from 'react'

// export const Task = () => {
//     const [count, setcount] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setcount((prev) => prev+1)
//         },1000)
//         return  () => {
//             clearInterval(interval)
//         }
//     },[])

//     return(
//         <div>
//             <p>{ count }</p>
//         </div>

//     )
// }