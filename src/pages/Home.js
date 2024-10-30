import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToDashboard}>Go to Dashboard</button>
        </div>
    );
};

export default Home;