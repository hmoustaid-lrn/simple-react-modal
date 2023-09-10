To install and use the Modal component inside your React app, follow these steps:

## Installation


1. To install: 'npm i hmstd-react-modal`

## Usage

2. Import the Modal component from the package, and include it in your component where you want to use it. :
```
import { Modal } from 'hmstd-react-modal';
```

3. In your component, you can control the visibility of the modal using state (e.g., showModal) and open or close it by toggling the state with functions like openModal and closeModal.

## Example

Here's an example:
```
import { Modal } from 'hmstd-react-modal'
import React from 'react'

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
```
   
   