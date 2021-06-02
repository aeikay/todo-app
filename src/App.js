import './App.css'
import { useState } from 'react'

function App() {
  const [toDOs, settoDOs] = useState([])
  const [toDO, settoDO] = useState('')
  return (
    <div className='app'>
      <div className='mainHeading'>
        <h1>ToDo List</h1>
      </div>
      <div className='subHeading'>
        <br />
        <h2> Wednesday 🌝 ☕ </h2>
      </div>
      <div className='input'>
        <input
          type='text'
          value={toDO}
          onChange={(e) => settoDO(e.target.value)}
          placeholder='🖊️ Add item...'
        />

        <i
          onClick={() => settoDOs([...toDOs, { text: toDO, status: false }])}
          className='fas fa-plus'
        ></i>
      </div>
      {toDOs.map((each) => {
        return (
          <div className='todos'>
            <div className='todo'>
              <div className='left'>
                <input
                  onChange={(e) => {
                    // console.log(e.target.c hecked)
                    settoDOs(
                      toDOs.filter((nsew) => {
                        nsew.status = e.target.checked
                        return nsew
                      })
                    )
                  }}
                  type='checkbox'
                  name=''
                  id=''
                />
                <p>{each.text}</p>
                {console.log(each)};
              </div>
              <div className='right'>
                <i className='fas fa-times'></i>
              </div>
            </div>
          </div>
        )
      })}
      <h1>Completed</h1>
      {toDOs.map((each) => {
        if (each.status) {
          return <h1>{each.text}</h1>
        }
        return null
      })}
    </div>
  )
}

export default App
