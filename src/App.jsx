import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <div className='main'>
        <Navbar />
          <main>
              <Router />
          </main>
      </div>
    </BrowserRouter>
  )
}

export default App
