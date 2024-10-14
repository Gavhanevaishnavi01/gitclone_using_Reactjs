import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Repository from './components/Repository';
import PullRequests from './components/PullRequests';
import Issues from './components/Issues';
import Marketplace from './components/Marketplace';
import Explore from './components/Explore';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('repository');

    const renderPage = () => {
        switch (currentPage) {
            case 'pullRequests':
                return <PullRequests />;
            case 'issues':
                return <Issues />;
            case 'marketplace':
                return <Marketplace />;
            case 'explore':
                return <Explore />;
            default:
                return <Repository />;
        }
    };

    return (
        <div className="App">
            <Header setCurrentPage={setCurrentPage} />
            <Profile />
            <div className="content container mt-4">{renderPage()}</div>
        </div>
    );
}

export default App;
