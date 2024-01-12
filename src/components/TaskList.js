import React from 'react'
import Task from './Task'

function TaskList({ tasks, setTasks, comptasks, setCompTasks , editHandler}) {



    return (
        <div>
            {
                tasks.length > 0 ? tasks.map((task) => {
                    return (
                        <Task task={task} key={task.id}  setTasks={setTasks} setCompTasks={setCompTasks} editHandler={editHandler} />
                    )
                }) : <p style={{margin:"10px"}}>No Tasks</p>
            }
        </div>
    )
}

export default TaskList