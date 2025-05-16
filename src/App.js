// import React, { useState } from 'react';
// import DefaultListItem from './components/items'; // Make sure this component exists

// function App() {
//   // State to track the input value
//   const [item, setItem] = useState('');

//   // Initial and added items
//   const [items, setItems] = useState([
//     { id: 1, name: "Ryan's Item", description: "This is  Ryan's item" },
//     { id: 2, name: "Fotsing's Item", description: "This is  Fotsing's item" },
//     { id: 3, name: "Akika's Item", description: "This is  Akika's item" }
//   ]);

  
//   const handleAdd = () => {
//     const newItem = {
//       id: items.length + 1,
//       name: item,
//       description: "This is a newly added item"
//     };

//     setItems([...items, newItem]);  
//     setItem('');  
//   };

//   return (
//     <div>
//       <h2>Add an Item</h2>

//       <input
//         type="text"
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//         placeholder="Enter an item"
//       />
//       <button onClick={handleAdd}>Add Item</button>

//       <h2>Market Items</h2>

//       <ul>
//         {items.map((item) => (
//           <DefaultListItem key={item.id} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function UserCard({ user, isAdmin }) {
//   const { name, age, location } = user;

//   const getLocation = () => location ?? "Unknown Location";

//   return (
//     <div style={styles.card}>
//       <h2>{name ?? "Unnamed User"}</h2>
//       <p>Age: {age ?? "Not provided"}</p>
//       <p>Location: {user?.location ?? "Not available"}</p>

      
//       {isAdmin && <button style={styles.btn}>Delete User</button>}

      
//       <p style={{ color: age >= 18 ? "green" : "red" }}>
//         {age >= 18 ? "Adult" : "Minor"}
//       </p>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     border: "1px solid #ccc",
//     padding: "16px",
//     borderRadius: "8px",
//     margin: "16px",
//     width: "250px",
//     backgroundColor: "#f9f9f9",
//   },
//   btn: {
//     padding: "6px 12px",
//     backgroundColor: "#e74c3c",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default function App() {
//   const user = {
//     name: "Akika",
//     age: 25,
//     location: "London",
//   };

//   return (
//     <div>
//       <UserCard user={user} isAdmin={true} />
//       <UserCard user={{ name: "Fomo", age: 15 }} isAdmin={false} />
//     </div>
//   );
// }


// import React, {useState} from 'react';


// function TodoList(){
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState("");

//   const addList = () => { 
//     if (!input) return;
//     setList([...list, input]);
//     setInput("");
//   };

//   return (
//     <div>
//       <input placeholder='New Task' value={input} onChange={(event)=> setInput(event.target.value)}/>
//       <button onClick={addList}>Add</button>
//       <ul>
//         {list.map((list, index) => (
//           <li key={index}>{list}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList

// import {useState, useEffect } from "react";

// function Counter(){
//   const[count, setCount] = useState(0);

//   useEffect(()=>{
//   console.log(`Count changed: ${count}`);

//   }, [count]);

//   return(
//     <div>
//       <button onClick={()=> setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default Counter

// import { useEffect } from "react";

// function Timer(){
//   useEffect(()=>{
//     const interval = setInterval(()=> {
//       console.log("Tick....")
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       console.log("Timer Stopped")
//     }
//   }, []);

//   return <p>Timer is running...check the console</p>
// }
// export default Timer;

// import {useState, useEffect} from 'react';

// function Users(){
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//       setUsers(data);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <p>Loading users......</p>

//   return (
//     <ul>
//       {users.map(user=> <li key={user.id}>{user.name}</li>)}
//     </ul>
//   )
// }
// export default Users;

// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';

// function Users(){
//   const {data, isLoading, error} = useQuery({
//     queryKey: ['users'],
//     queryFn: () => axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>

//   return (
//     <ul>
//       {data.map(user=> (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   )
// }

// export default Users;

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FruitList from './Fruits'

const queryClient = new QueryClient();

function App(){
  return(
    <QueryClientProvider client={queryClient}>
    <div>
      <h1>List of Fruits</h1>
      <FruitList/>
    </div>
  </QueryClientProvider>
  )
}

export default App;

