import React, { useState } from 'react';

const PullRequests = () => {
    const [pullRequests, setPullRequests] = useState([]);
    const [prTitle, setPrTitle] = useState('');
    const [prDescription, setPrDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPullRequests([...pullRequests, { title: prTitle, description: prDescription }]);
        setPrTitle('');
        setPrDescription('');
    };

    return (
        <div className="pull-requests bg-light p-4 rounded">
            <h2>Pull Requests</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={prTitle}
                        onChange={(e) => setPrTitle(e.target.value)}
                        placeholder="Pull Request Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={prDescription}
                        onChange={(e) => setPrDescription(e.target.value)}
                        placeholder="Pull Request Description"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create Pull Request</button>
            </form>
            <ul className="list-group">
                {pullRequests.map((pr, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{pr.title}</strong>: {pr.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PullRequests;
