import React, {useState } from 'react'

import Modal from './lib/components/Modal';

function App() {

  const [showModal, setShowModal] = useState(true)

  const handleClick = () =>{
    setShowModal(false)
  }
  return (
    <div>
        {showModal ? (<Modal text="Test" handleClick={handleClick} buttonText="Close"/>):("")}
    </div>
    
  )
    
  
}

export default App;