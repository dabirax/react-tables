import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTable from './components/BasicTable'
import SortingTable from './components/SortingTable'

function App() {

  return (
    <div className="App">
      <SortingTable/>
    </div>
  )
}

export default App
