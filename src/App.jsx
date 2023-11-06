import './App.css'
import Navigations from './Components/Navigations'
import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Contact from './Views/Contact'
import NotFound from './Views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Navigations />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/NotFound' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
