import axios from 'axios'
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { User } from '../business/User'

export const myContext = createContext<any>({})

export const Context: React.FC = (props: PropsWithChildren<any>) => {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        axios.get("http://localhost:4000/user", {
            withCredentials: true
        }).then(res => {
            setUser(res.data)
        })
    }, [])
    return (
        <myContext.Provider value={user}>
            {props.children}
        </myContext.Provider>
    )
}
