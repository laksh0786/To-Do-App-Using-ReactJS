import React from 'react'

function CompletedTask({ compTasks }) {
    return (
        <ul className='comp-Task'>
            {
                // compTasks.map(task => <p>{task.title}</p>)
                compTasks.length>0 ? compTasks.map(task => <li  key={task.id}>{task.title}</li>)  : <p>No Completed Tasks</p>
            }
        </ul>
    )
}

export default CompletedTask