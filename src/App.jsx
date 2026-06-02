import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><main className="main-content"><Home /></main></>} />
        <Route path="/about" element={<><Navbar /><main className="main-content"><About /></main></>} />
        <Route path="/contact" element={<><Navbar /><main className="main-content"><Contact /></main></>} />
        <Route path="/login" element={<><Navbar /><main className="main-content"><Login /></main></>} />
        <Route path="/signup" element={<><Navbar /><main className="main-content"><Signup /></main></>} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App