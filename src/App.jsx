import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css"; 
import "@fontsource/montserrat/400-italic.css";

function App() {

  return (
    <BrowserRouter>
      <div className='main'>
        <Navbar />
          <main>
              <Router />
          </main>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
