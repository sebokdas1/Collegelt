import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setUsers(data?.results))
    }, [])
    const handleUser = (user) => {
        navigate('/user-route')
        localStorage.setItem('user', JSON.stringify(user))
    }
    return (
        <div>

            <div className='container mx-auto mt-10'>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user.email} className="hover cursor-pointer" onClick={() => handleUser(user)}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name?.title} {user.name.first} {user?.name?.last}</td>
                                        <td>{user?.gender}</td>
                                        <td>{user?.location?.city}</td>
                                        <td>{user?.location?.state}</td>
                                        <td>{user?.location?.country}</td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Home;