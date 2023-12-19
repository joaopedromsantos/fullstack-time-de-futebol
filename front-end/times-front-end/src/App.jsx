import { Outlet } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'

function App() {

  return (
      <div className='App'>
        <Navbar>
          <h1>Times</h1>
        </Navbar>
        <Outlet />
      </div>
  )
}

export default App
