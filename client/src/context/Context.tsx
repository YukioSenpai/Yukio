import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext<any>({})

export const Context: React.FC = ({ children }) => {
    const [user, setUser] = useState<any>()

    useEffect(() => {
        axios.get("http://localhost:4000/user", {
            withCredentials: true
        }).then(res => {
            setUser(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <myContext.Provider value={user}>
            {children}
        </myContext.Provider>
    )
}
