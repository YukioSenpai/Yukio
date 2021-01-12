import React from 'react'
import { Link } from 'react-router-dom'
import { css } from './navbar.styles'

export const NavBar: React.FC = () => {
    void 0
    return (
        <div className={css.container}>
            <Link to="/logout">Logout</Link>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
