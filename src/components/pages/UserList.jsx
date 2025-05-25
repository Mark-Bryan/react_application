import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://banyeh23.pythonanywhere.com/api/users');
        setUsers(response.data);
      } catch (error) {
        alert('Failed to fetch Users');
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>All Users</h2>
      <ul className="user-list-items">
        {users.map(user => (
          <li key={user.id} className="user-list-item">
            <Link to={`/users/${user.id}`} className="user-link">{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
