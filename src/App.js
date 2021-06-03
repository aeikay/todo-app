import './App.css'
import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

function App() {
  let date = new Date()
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const [Todo, setTodo] = useState([])
  const [todo, settodo] = useState('')

  return (
    <div className='app'>
      <div className='title'>
        <h1>KuDu toDO</h1>
      </div>
      <div className='date'>
        <h2>{date.toLocaleString('en-US', options)}</h2>
      </div>
      <div className='container'>
        <input
          value={todo}
          style={{ color: 'black', width: '250px' }}
          type='text'
          placeholder='add item..'
          onChange={(e) => {
            settodo(e.target.value)
            console.log(todo)
          }}
        />

        <i
          style={{ ' margin-left': '6px' }}
          class='fas fa-plus'
          onClick={() => {
            setTodo([...Todo, { key: Date.now(), text: todo, status: false }])
          }}
        ></i>

        {Todo.map((obj) => {
          console.log(obj)
          return (
            <div>
              
                <p>{obj.text}</p>
             
              <i class='fas fa-times'></i>
            </div>
          )
        })}


      </div>
    </div>
  )
}
export default App
