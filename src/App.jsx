import './App.css'

import Moreproject from './Componets/Moreproject'
import Hero from './Hero'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <div className='bg-black text-white px-4'>
      
      <Routes>
        <Route path='/projects' element={<Moreproject/>} />
        <Route path='/' element={<Hero/>} />
      </Routes>
      
    </div>
  )
}

export default App
