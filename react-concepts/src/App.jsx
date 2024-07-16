import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from "./concepts/FunctionalComponent.jsx";
import ClassComponent from "./concepts/ClassComponent.jsx";
import {ChildProps} from "./concepts/ChildProps.jsx";
import ChildState from "./concepts/ChildState.jsx";
import {EventHandlingTest} from "./concepts/EventHandlingTest.jsx";
import {ShowSeason} from "./concepts/RenderListUsingMap.jsx";
import {RouterTest} from "./concepts/RouterTest.jsx";


function App() {
  const user = {name:"Sanat", age: 30};
  const message = "Welcome to the React App!";
  const seasons= ["Summer", "Rainy", "Winter"];
  return (
      <>
        <ChildProps message={message} user={user} />
          <RouterTest></RouterTest>
        <ChildState message={message} user={user} />
          <EventHandlingTest />
          <ShowSeason seasons={seasons}/>
        <FunctionalComponent></FunctionalComponent>
        <ClassComponent></ClassComponent>
      </>
  )
}

export default App
