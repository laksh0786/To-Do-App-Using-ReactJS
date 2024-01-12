import React, { useState } from 'react'

function Task({ task, setTasks, setCompTasks, editHandler }) {

    const style = {
        display: 'flex',
        gap: '20px',
    }

    function completeHandler() {
        setCompTasks((prevCompTasks) => {
            return [...prevCompTasks, task]
        })
        setTasks((prevTasks) => {
            return prevTasks.filter((t) => {
                return t.id !== task.id
            })
        })
    }

    function deleteHandler() {

        setTasks((prevTasks) => {
            return prevTasks.filter((t) => {
                return t.id !== task.id
            })
        })

    }


    const [isEdit, setIsEdit] = useState(false);


    function changeHandler(e) {
        setTasks((prevTasks) => {
            return (
                prevTasks.map((t) => {
                    if (t.id === task.id) {
                        return {
                            ...t, title: e.target.value
                        }
                    }
                    else {
                        return t;
                    }
                })
            )
        })
    }


    let editInput;

    if (isEdit) {
        editInput = (
            <div className='edit-Task'>
                <input type="text" className='edit-ip' value={task.title} onChange={changeHandler} />
            </div>
        )
    }

    else {
        editInput = (
            <div className='edit-Task '>
                <p>{task.title}</p>
            </div>
        )
    }


    return (
        <div className='task-section' key={task.id} style={style}>
            {editInput}
            <div className='task-btns'>
                {isEdit ? <button onClick={() => setIsEdit(false)}>Save</button> : <button onClick={() => setIsEdit(true)}>Edit</button>}
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={completeHandler}>Complete</button>
            </div>
        </div>
    )
}

export default Task