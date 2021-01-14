import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/Context'
import { useTranslator } from '../../hooks/useTranslator'
import { NavbarMsg } from './navbar.msg'
import { css } from './navbar.styles'

export const NavBar: React.FC = () => {
    const msg = useTranslator(NavbarMsg)
    const ctx = useContext(myContext)

    return (
        <div className={css.container}>
            <Link to="/">Home</Link>
            {ctx ?
                <>
                    <Link to="/logout">Logout</Link>
                    <Link to="profile">Profile</Link>
                    {ctx.isAdmin === true ? <Link to="/admin">Admin</Link> : <></>}

                </>
                :
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">{msg.login}</Link>
                </>
            }
        </div>
    )
}
