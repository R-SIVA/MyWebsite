import React from 'react';
import MyCarousel from './MyCarousel';


const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Website</h1>
            </header>
            <MyCarousel />
            <main>
                {/* Your main content goes here */}
            </main>
        </div>
    );
}

export default Home;
