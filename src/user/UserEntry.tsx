import React from 'react'
import { User } from '../types/user'

interface UserEntryProps {
    user: User
}

const UserEntry = ({user}: UserEntryProps) => {

    const timeCreated = new Date(user.timeCreated);

    return (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{timeCreated.toDateString()}</td>
            <td>{timeCreated.toTimeString()}</td>
        </tr>
    )
}

export default UserEntry
