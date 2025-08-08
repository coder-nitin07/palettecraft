import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  )
}

export default App
