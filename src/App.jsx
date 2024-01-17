import React from 'react'
import Books from './Components/Books'
import Form from './Components/Form'
import { Routes , Route } from 'react-router-dom'



function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Books/>} />
    <Route path="/Form" element={<Form/>} />
   </Routes>

   </>
  )
}


export default App