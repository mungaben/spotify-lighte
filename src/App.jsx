import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



import  { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Register from './components/Register'
import SearchArtist from './components/SearchArtist'
import SearchTrack from './components/SearchTrack'

function App() {


  return (
    <div className="App">
       <Router>
        <Register/>
        <Routes>

          <Route path='/tracks' element={<SearchTrack/>}/>
          <Route path='/' element={<SearchArtist/>}/>
          
          
        </Routes>
        


       </Router>
     
    </div>
  )
}

export default App
