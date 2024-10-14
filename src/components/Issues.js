import React, { useState } from 'react';

const Issues = () => {
    const [issues, setIssues] = useState([]);
    const [issueTitle, setIssueTitle] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIssues([...issues, { title: issueTitle, description: issueDescription }]);
        setIssueTitle('');
        setIssueDescription('');
    };

    return (
        <div className="issues bg-light p-4 rounded">
            <h2>Issues</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={issueTitle}
                        onChange={(e) => setIssueTitle(e.target.value)}
                        placeholder="Issue Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={issueDescription}
                        onChange={(e) => setIssueDescription(e.target.value)}
                        placeholder="Issue Description"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Create Issue</button>
            </form>
            <ul className="list-group">
                {issues.map((issue, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{issue.title}</strong>: {issue.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Issues;
