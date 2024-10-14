import React, { useState } from 'react';

const Repository = () => {
    const [repos, setRepos] = useState([]);
    const [repoName, setRepoName] = useState('');
    const [repoDescription, setRepoDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setRepos([...repos, { name: repoName, description: repoDescription }]);
        setRepoName('');
        setRepoDescription('');
    };

    return (
        <div className="repository bg-light p-4 rounded">
            <h2>Repositories</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={repoName}
                        onChange={(e) => setRepoName(e.target.value)}
                        placeholder="Repository Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={repoDescription}
                        onChange={(e) => setRepoDescription(e.target.value)}
                        placeholder="Repository Description"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create Repository</button>
            </form>
            <ul className="list-group">
                {repos.map((repo, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{repo.name}</strong>: {repo.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repository;
