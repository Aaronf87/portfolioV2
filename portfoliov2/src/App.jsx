import { Routes, Route } from "react-router-dom"
import Header from '../src/components/header'
import Home from '../src/pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from '../src/components/footer'
import NotFound from '../src/pages/NotFound'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
