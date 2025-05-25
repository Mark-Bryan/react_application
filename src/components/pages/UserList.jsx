import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://banyeh23.pythonanywhere.com/api/users');
        const filteredUsers = response.data.filter(user => user.id !== currentUser?.id);
        setUsers(filteredUsers);
      } catch (error) {
        alert('Failed to fetch users');
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
