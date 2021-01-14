import { Button } from 'antd'
import axios, { AxiosResponse } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { User } from '../business/User'
import { myContext } from '../context/Context'

export const AdminPage: React.FC = () => {
    const ctx = useContext(myContext);

    const [data, setData] = useState<User[]>();
    const [selectedUser, setSelectedUser] = useState<string>();
    useEffect(() => {
        axios.get("http://localhost:4000/getallusers", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            setData(res.data.filter((item: User) => item.username !== ctx.username
            ))
        })
    }, [ctx]);
    if (!data) {
        return null;
    }


    const deleteUser = () => {
        let userid: string;
        data.forEach((item: User) => {

            if (item.username === selectedUser) {
                userid = item.id;
            }
        })

        axios.post("http://localhost:4000/deleteuser", {
            id: userid!
        }, {
            withCredentials: true
        });
    }

    return (
        <div>
            <h1>Admin Page, Only Admin's Can See This!</h1>
            <select onChange={e => setSelectedUser(e.target.value)} name="deleteuser" id="deleteuser">
                <option id="Select a user">Select A User</option>
                {
                    data.map((item: User) => <option key={item.username} id={item.username}>{item.username}</option>
                    )
                }
            </select>
            <Button onClick={deleteUser}>Delete User</Button>
        </div>
    )
}