import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import { Netflix } from './pages/Netflix'
import { Player } from './pages/Player'
import './App.css'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/netflix' element={<Netflix />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/player' element={<Player />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
