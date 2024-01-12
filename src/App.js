import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import CompletedTask from './components/CompletedTask';

function App() {

  const [nextId, setNextId] = useState(0);
  const [tasks, setTasks] = useState([])
  const [comptasks, setCompTasks] = useState([]);

  console.log(tasks);

  return (
    <div className="wrapper">

      <h1 className='heading'>To Do App</h1>

      <AddTask tasks={tasks} setTasks={setTasks} nextId={nextId} setNextId={setNextId} />

      <hr />

      <div className='pending-tasks'>
        <h2>To Do Tasks</h2>
        <TaskList tasks={tasks} setTasks={setTasks} comptasks={comptasks} setCompTasks={setCompTasks} />
      </div>

      <hr />

      <div className='completed-tasks'>
        <h2>Completed Tasks</h2>
        <CompletedTask compTasks={comptasks} />
      </div>

    </div>
  );
}

export default App;
