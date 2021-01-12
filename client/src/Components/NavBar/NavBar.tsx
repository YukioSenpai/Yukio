import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslator } from '../../hooks/useTranslator'
import { NavbarMsg } from './navbar.msg'
import { css } from './navbar.styles'

export const NavBar: React.FC = () => {
    const msg = useTranslator(NavbarMsg)
    return (
        <div className={css.container}>
            <Link to="/logout">Logout</Link>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">{msg.login}</Link>
        </div>
    )
}
