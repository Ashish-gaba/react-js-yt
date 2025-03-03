import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)  //react hook - takes default value
  
  // let counter = 15

  const addValue = () => {
    
    // counter = counter + 1
    if (counter < 20){
      // setCounter(counter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      
      console.log("clicked", counter);
    }

  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    } 
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addValue}>Add value {counter}</button>
      <br/>
      <button onClick = {removeValue}>remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

//React controls UI Updation
export default App
