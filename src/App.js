import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import UserList from './components/pages/UserList';
import UserDetails from './components/pages/UserDetails';
import DefaultPage from './components/pages/DefaultPage';
import './App.css';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  return (
    <Router>
      <DefaultPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {isLoggedIn ? (
            <>
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/" element={<Navigate to="/users" />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </DefaultPage>
    </Router>
  );
}

export default App;
