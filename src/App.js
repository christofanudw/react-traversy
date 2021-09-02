import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 5th at 4:00pm',
        reminder: false,
    }
  ]);

  const name = "Fano"

  const showForm = () => {
    setShowAddTask(!showAddTask);
  }

  const addTask = (task) => {
    const id = tasks.length+1;
    const newTask = {...task, id};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header title={`Task Tracker App by ${name}`} addButton={showForm} formVisible={showAddTask} />
      {showAddTask ? 
      <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No Tasks to Show'}
    </div>
  );
}

export default App;
