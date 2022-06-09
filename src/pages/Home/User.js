import React, { useEffect, useState } from 'react';

const User = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
    }, [])


    const currentMonth = (user?.dob?.date)?.slice(5, 7);
    const currentDays = (user?.dob?.date)?.slice(8, 10);
    var myBirthday, today, bday, diff, days;
    myBirthday = [currentDays, currentMonth];
    today = new Date();
    bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
    if (today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear() + 1);
    }
    diff = bday.getTime() - today.getTime();
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(days)

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={user?.picture?.large} class="w-1/3 rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 class="text-5xl font-bold">{user?.name?.title} {user?.name?.first} {user?.name?.last}</h1>
                        <p class="py-6">phone: {user?.phone}</p>
                        <p>Date Of Birth: {user?.dob?.date}</p>
                        <p>Next Birthday: {days} days left</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;