import React from 'react';
import useUsers from './useUsers';

const Home = () => {
    const [users] = useUsers()

    return (
        <div>
            <h2>{users?.length}</h2>

            <div className='container mx-auto'>
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
                                    <tr key={user.email} className="hover">
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