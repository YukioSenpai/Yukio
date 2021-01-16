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
            if (res.data === 'successfully authenticated') {
                window.location.href = '/'
            }
        }, () => {
            console.log("Failure");
        })
    }

    const google = () => {
        axios.get("http://localhost:4000/auth/google", {
            withCredentials: true
        }).then((res) => {
            console.log(res)
        })
    }
    return (
        <div>
            <div>Login</div>
            <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <Input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <Button onClick={login}>Login</Button>
            <div>login fb</div>
            <Button onClick={google}>log fb</Button>
        </div>
    )
}
