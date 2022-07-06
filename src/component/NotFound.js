import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <div className="vh-100 bg-dark bg-opacity-50 text-light fw-bolder flex-decoration-row d-flex align-items-center justify-content-center">
                <div className="not-found">
                    <h4>Page Not Found</h4>
                    <NavLink to="/">Back</NavLink>
                </div>
            </div>
        </div>
    )
}
