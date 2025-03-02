import React from 'react';
import './styles/Home.css'
import todoImage from '../assets/todo.jpg';  // Ensure you place the image inside the 'assets' folder

const Home = () => {
    return (
        <section className="home-container">
            <div className="home-wrapper">
                <div className="home-content">
                    <h1>Master Your Tasks, Control Your Time</h1>
                    <p>
                        TaskMaster empowers you to take control of your productivity. Seamlessly manage tasks,
                        meet deadlines, and achieve your goals.
                    </p>
                    <button className="home-button">
                        Start for Free <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div className="home-image">
                    <img src={todoImage} alt="Task Management" />
                </div>
            </div>
        </section>
    );
};

export default Home;
