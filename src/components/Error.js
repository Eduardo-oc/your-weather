import React from 'react';
import '../styles/Error.css'

export const Error = ({ msg }) => {
    return (
        <div className="size" >
            <p className="bg-danger text-light p-3 fs-5 border border-3">{msg}</p>
        </div>
    )
}
