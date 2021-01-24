import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1"/>
                <div className="col-sm-10 justify-content-center m-5 p-5 text-center">
                    <h1>Welcome to USER DIRECTORY!</h1>
                    <h5>Visit the Discover tab to meet a random user or the Search tab to see all the users.</h5>
                </div>
                <div className="col-sm-1"/>
            </div>
        </div>
    );
};

export default Home;