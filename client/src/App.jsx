import { useState } from 'react'
import './App.css'
import Home from './components/Home.Jsx'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Sale from './components/Sale'
import Cart from './components/Cart'
import Feature from './components/Feature.jsx'
import Footer from './components/Footer.jsx'
import Cont from './components/Cont.jsx'

function App() {
  const [index, setIndex] = useState(0)

  const changeSection = (e,i) => {
    e.preventDefault()
    if (i==9) return
    setIndex(i)
  }

  return (
    <>
    <Navbar changeSection={changeSection} />
    
    <div 
    className="main-wrapper" 
    style={{transform: `translateX(${-100 * index}vw)`}}
    >
      <Home />
      <Shop />
      <Sale />
      <Cart />
    </div>
    <Cont />
    <Footer />
    </>
  )
}

export default App
