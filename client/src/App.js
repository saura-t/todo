import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Leftpannel from './components/Leftpannel';
import Rightpannel from './components/Rightpannel';
import Todos from './components/Todos';
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())

  const toggleStatus = (id) => {
    setTodos(filteredTodos.map((todo) => todo.id === id ? {...todo, status: !todo.status} : todo))
  }

  const addTodo = (todo) => {
    axios.post('http://localhost:4000/app/addtodo', todo)
    .then(response => {
      axios.get('http://localhost:4000/app/todos')
      .then((response) => {
        const data = response.data;
        setTodos(data);
        console.log('Data received')
      })
      .catch(() => {
        console.log('Data lost')
      })
      console.log(response.data)
    })
  }

  const handleOnChange = (Date) => {
    setSelectedDate(Date)
}

const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

const searchDate = selectedDate.getDate() + " " + mon[selectedDate.getMonth()] + ", " + selectedDate.getFullYear()

useEffect(() => {
  axios.get('http://localhost:4000/app/todos')
    .then((response) => {
      const data = response.data;
      setTodos(data);
      console.log('Data received')
    })
    .catch(() => {
      console.log('Data lost')
    })
}, [])

const filteredTodos = todos.filter(todo => todo.date === searchDate)

  return (
    <div className="App">
      <Header className="fixed"/>
      <div className="flex border-2 h-full">
        <div className="flex-initial" >
          <Leftpannel selectedDate={selectedDate} setSelectedDate={handleOnChange} />
        </div>
        <div className="flex-auto border-l-2 border-r-2 border-red-500 h-screen">
          <Todos className="flex" todos={filteredTodos} onToggle={toggleStatus} />
        </div>
        <div className="flex-initial items-center">
          <Rightpannel className="flex" onAdd={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
