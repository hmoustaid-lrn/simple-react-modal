import React, {useState } from 'react'

import Modal from './lib/components/Modal';

function App() {
  const [showingModal, setShowingModal] = useState(true)

  return (
    <Modal showingModal={showingModal} text='Employee Created!' toggleModal={setShowingModal}/>
  );
}

export default App;