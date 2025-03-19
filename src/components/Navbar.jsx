import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Charts Dashboard</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/bar-chart">Bar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/line-chart">Line</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pie-chart">Pie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}