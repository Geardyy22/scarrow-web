import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/login'

const App = () => {
  
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            </Routes>
      </Router>
  )
}

export default App
