import React from 'react';
import HomePage from './Homepage';
import AboutPage from './AboutPage';
import Header from './common/Header';

const App = () => {

    const getPage = () => {
        const route = window.location.pathname;
        return (route === "/about" ? <AboutPage /> : <HomePage />); 
    };

    return(
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    );
};

export default App;