import React from 'react';
import '../styles/Nav.css';

export const Header = ({ titulo }) => {
    return (
        <nav className="text-center p-3 bg-nav mb-5 text-light">
            <div className="container-fluid">
                <h1> {titulo} </h1>
            </div>
        </nav>
    )
}
