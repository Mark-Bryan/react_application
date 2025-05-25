import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  function capitalizeFirstLetter(string) {
    if (!string) return
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`https://banyeh23.pythonanywhere.com/user/${id}`);
        setUser(response.data);
        console.log('Fetched user:', response.data);
      } catch (error) {
        alert('Failed to fetch user details');
      }
    }
    fetchUser();
  }, [id]);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container user-details">
      <h2>User Details</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {capitalizeFirstLetter(user.role)}</p>
      </div>
    </div>
  );
}

export default UserDetails;
