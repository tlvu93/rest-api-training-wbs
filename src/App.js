
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import "./styles.css";


function User(user) {
  return (
    <li>
      <img src={user.picture.medium} />
      <p>{user.name.first} {user.name.last}</p>
      <div>{user.email}</div>
    </li>
  )
}

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=10"; // Get 10 random users

    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setUsers(data.results);
      })
  }, []);


  return (
    <div className="App">
      <div class="block">
        <ul id="users">
          {users.map(User)}
        </ul>
      </div>
    </div>
  );
}

export default App;
