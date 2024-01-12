import React, { useEffect, useRef } from 'react'

function AddTask({ tasks, setTasks, nextId, setNextId }) {

    const inp_Ref = useRef()

    const clickHandler = () => {
        // console.log(inp_Ref.current.value);

        // setTasks((prev) => {
        //     return (
        //         [...prev, {
        //             id: nextId + 1,
        //             title: inp_Ref.current.value,
        //         }]
        //     )    
        // })

        if(inp_Ref.current.value === ''){
            alert('Please Enter a Task');
            return;
        }

        setTasks(
            [...tasks, {
                id: nextId + 1,
                title: inp_Ref.current.value,
            }]
        )

        setNextId(nextId + 1);
    }

    useEffect(() => {
        inp_Ref.current.value = '';
        // inp_Ref.current.focus();
    }, [tasks]);


    return (
        <div className='task-container'>
            <input className='task-input' type="text" ref={inp_Ref} />
            <button className='addBtn' onClick={clickHandler}>Add Task</button>
        </div>
    )
}

export default AddTask