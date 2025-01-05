import { useState } from 'react'
import './App.css'
import Chatbot from './components/Chatbot'

function App() {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <Chatbot />
    </div>
    </>
  )
}

export default App
