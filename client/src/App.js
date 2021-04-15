import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Doctors',
          day: 'Feb 6th at 1:30pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
      
  ])
  
  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 99999) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)}showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks 
        tasks={tasks} 
        onToggle={toggleReminder}
        onDelete={deleteTask}/> : 'No Tasks'}
    </div>
  );
}

export default App;
