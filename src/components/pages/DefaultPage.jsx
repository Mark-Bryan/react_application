import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DefaultPage({ isLoggedIn, setIsLoggedIn, children }) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.get('https://banyeh23.pythonanywhere.com/logout', { withCredentials: true });
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      alert('Logout failed');
    }
  }

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li><Link to="/register">Register</Link></li>
            {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
            {isLoggedIn && <li><Link to="/users">User List</Link></li>}
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="logout-button"
                  style={{
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'blue',
                    textDecoration: 'underline',
                    font: 'inherit'
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="content">
        {children}
      </main>
    </div>
  );
}

export default DefaultPage;
