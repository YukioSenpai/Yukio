import { Input, Button } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'

export const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const login = () => {
        axios.post("http://localhost:4000/login", {
            username,
            password
        }, {
            withCredentials: true
        }).then(res => {
            console.log(`you're logged in :`, res.data)
        })
    }

    const getUser = () => {
        axios.get("http://localhost:4000/user", {
            withCredentials: true
        }).then(res => {
            console.log('user is :', res.data)
        })
    }

    return (
        <div>
            <div>Login</div>
            <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <Input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <Button onClick={login}>Login</Button>
            <Button onClick={getUser}>Get user that logged in</Button>
        </div>
    )
}
