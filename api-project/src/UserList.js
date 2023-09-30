import React, {useState, useEffect} from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
      // Make an API request to fetch the list of users
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          // Set the fetched data to the state variable
        setListOfUsers(response.data);
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
        <h1>List of Users</h1>
        <ul>
            {listOfUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </div>
    );
    }
    
    export default UserList;