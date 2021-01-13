import { Button } from 'antd'
import Axios from 'axios'
import React from 'react'

export const Logout: React.FC = () => {
    const logout = () => {
        Axios.get("http://localhost:4000/logout", {
            withCredentials: true
        }).then(res => {
            if (res.data === 'successfully logout') {
                window.location.href = '/'
            }
        })
    }
    return (
        <div>
            <div>Logout</div>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}
