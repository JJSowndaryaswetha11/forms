
import './App.css'
import { Navbar } from './Component/Navbar';
import {Routes,Route} from 'react-router-dom'

import LoginForm from './Pages/Login'

import Home from './Pages/Home'
import Register from './Pages/Register'


function App() {
  
  return (
    <div className='Apps'> <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
   
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/register' element={<Register/>} />
      
      
    </Routes>
    
    </div>
  
  )
}

export default App;


