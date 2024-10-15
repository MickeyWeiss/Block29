import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'
import NewPlayerForm from './components/NewPlayerForm.jsx'

function App() {
  return (
    <>
    <h1>Welcome to React Puppy Bowl!</h1>
    <NewPlayerForm />
    <AllPlayers />
    <SinglePlayer />
    </>
  )
}

export default App
