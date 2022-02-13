import React, { useState, useEffect } from "react";
import axios from 'axios'
import SingleUser from "./SingleUser";

const UserList = () => {
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=15')
        console.log('Aslan', response);
        setUsers(response.data.results);
        console.log('Aslan2', users);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="user-list">
            <ul>
                {users.map((user, idx) => (
                    <li>
                        {' '}
                        <SingleUser user={user} key={idx} />{' '}
                    </li>
                ))}
            </ul>

        </div>

    )
}

export default UserList;