import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from "./concepts/FunctionalComponent.jsx";
import ClassComponent from "./concepts/ClassComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <FunctionalComponent></FunctionalComponent>
        <ClassComponent></ClassComponent>
      </>
  )
}

export default App
