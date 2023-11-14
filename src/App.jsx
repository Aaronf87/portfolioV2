import { Routes, Route } from "react-router-dom"
import Header from '../src/components/header'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from '../src/components/footer'
import NotFound from '../src/pages/NotFound'
import Home from '../src/pages/HomePage'
import './index.css'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      {/* <Route path ="/" element={<Home/>}/>
      <Route path="/" element={<Home/>}/> */}
      <Route path="/" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
