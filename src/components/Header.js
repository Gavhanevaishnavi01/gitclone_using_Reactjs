import React from 'react';

const Header = ({ setCurrentPage }) => {
    return (
        <header className="bg-dark text-white p-3">
            <h1 className="h3">GitHub Clone</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item" onClick={() => setCurrentPage('repository')}>
                        <span className="nav-link text-white">Repositories</span>
                    </li>
                    <li className="nav-item" onClick={() => setCurrentPage('pullRequests')}>
                        <span className="nav-link text-white">Pull Requests</span>
                    </li>
                    <li className="nav-item" onClick={() => setCurrentPage('issues')}>
                        <span className="nav-link text-white">Issues</span>
                    </li>
                    <li className="nav-item" onClick={() => setCurrentPage('marketplace')}>
                        <span className="nav-link text-white">Marketplace</span>
                    </li>
                    <li className="nav-item" onClick={() => setCurrentPage('explore')}>
                        <span className="nav-link text-white">Explore</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
