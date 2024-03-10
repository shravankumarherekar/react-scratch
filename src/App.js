import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User Cards</h1>
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default App;
