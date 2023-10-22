import { useState } from 'react'
import './App.css'
import Header from './header'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    <Footer/>
   

    </>
  )
}

export default App
