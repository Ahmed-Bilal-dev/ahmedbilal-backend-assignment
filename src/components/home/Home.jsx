import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    // Function to update the heading
    // const updateHeading = () => {
    //     const put = document.getElementById('heading');
    //     if (put) {
    //         put.innerHTML = '{JSON} Placeholder'; // Change content of the heading
    //     }
    // };



    // useEffect(() => {
    //     updateHeading();
    // }, []);

    return (
        <div className="Home">
            <h1 id="heading">Ahmed Bilal</h1>
            <p>Free fake and reliable API for testing and prototyping. <br />
                Powered by <a href="https://github.com/typicode/json-server">JSON Server</a> + <a href="https://github.com/typicode/lowdb">LowDB.</a></p>
            <h4>Serving ~3 billion requests each month.</h4>
        </div>
    );
};

export default Home;

