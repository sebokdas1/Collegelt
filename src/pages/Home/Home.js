import React from 'react';
import useUsers from './useUsers';

const Home = () => {
    const [users] = useUsers()

    return (
        <div>
            <h2>{users?.length}</h2>
            <div>

            </div>

        </div>
    );
};

export default Home;