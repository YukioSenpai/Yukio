import React, { useContext } from 'react'
import { User } from '../business/User'
import { myContext } from '../context/Context'

export const Profile: React.FC = () => {
    const ctx: User = useContext(myContext)
    return (
        <div>
            <div>User currently login{ctx.username}</div>
        </div>
    )
}
