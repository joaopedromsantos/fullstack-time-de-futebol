import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import List from './pages/List.jsx'
import Create from './pages/Create.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='list' element={<List />} />
        <Route path='create' element={<Create />} />
      </Route>
    </Routes>
  </BrowserRouter>
)