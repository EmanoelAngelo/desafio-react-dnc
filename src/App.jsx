import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Projects from './componentes/section/Projects';
import About from "./componentes/section/About";
import Footer from './componentes/section/Footer';
import Navbar from './componentes/section/Navbar';
import Technology from './componentes/section/Technology';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar/>
       <Technology/>
       <Projects/>
       <About/>
       <Footer/>

    </div>
     
      
   
  )
}

export default App
