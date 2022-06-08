import React, { useEffect, useState } from 'react';

const User = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
    }, [])
    const birthDateObj = new Date(user?.dob?.date);
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1)
    }
    const day = user?.dob?.date - nextBirthday.toString()
    console.log(day)
    // console.log(nextBirthday.toString())
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={user?.picture?.large} class="w-1/3 rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 class="text-5xl font-bold">{user?.name?.title} {user?.name?.first} {user?.name?.last}</h1>
                        <p class="py-6">phone: {user?.phone}</p>
                        <p>Date Of Birth: {user?.dob?.date}</p>
                        <p>Next Birthday: {nextBirthday.toString()}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;