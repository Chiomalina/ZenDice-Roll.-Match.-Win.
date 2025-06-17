import { useState } from 'react'
import Die from "./Components/Die"
import './App.css'

function App() {

  {/**
 * Challenge:
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * Log the array of numbers to the console for now
 */}

    function generateAllNewDice(){
      // Create a new array (empty)
      const newDice = []

        // Loop 10 times
        for (let i = 0; i > 10; i++) {
          const rand = Math.ceil(Math.random() * 6) 
          newDice.push(rand)
        }
            // Generate a random number between 1-6
            // Push that number to the array
        // return the array
        return newDice

    }
 

  return (
    <main>
      <div className="dice-container">
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>

      </div>
    </main>
  )
}

export default App
