import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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

  const deleteTask = (id) => {
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header title={`Task Tracker App by ${name}`} />
      <Tasks tasks={tasks} onDelete={deleteTask} /> 
    </div>
  );
}

export default App;
