import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

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
