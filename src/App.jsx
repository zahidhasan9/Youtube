import { useState } from 'react'

import './App.css'
import Page from "./Page"
function App() {


  return (
    <>
  <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Video Gallery
      </h1>
      <Page />
    </div>
        
    </>
  )
}

export default App
