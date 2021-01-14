import { Input, Button } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'

export const Register: React.FC = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const register = () => {
        axios.post("http://localhost:4000/register", {
            username,
            password
        }, {
            withCredentials: true
        }).then(res => {
            if (res.data === 'success') {
                window.location.href = '/login'
            }
        })
    }

    return (
        <div>
            <div>Register</div>
            <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <Input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <Button onClick={register}>Register</Button>
        </div>
    )
}
