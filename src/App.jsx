import { useState } from 'react'
import './App.css'
import SearchTickets from './components/SearchTickets'

function App() {
  const [count, setCount] = useState(0)
  const ArrTickets = ['028562','028563','020083','018804','018803','010097','011767','014559','014560','021931','015467','034549','011432',
]
  return (
    <div className="App">
     <h1>busqueda de ticket</h1>
     <SearchTickets/>
    </div>
  )
}

export default App
