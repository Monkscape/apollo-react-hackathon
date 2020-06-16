import React from 'react'
import { User } from './types/user'

interface UserEntryProps {
    user: User
}

const UserEntry = ({user}: UserEntryProps) => {
    return (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.timeCreated}</td>
        </tr>
    )
}

export default UserEntry
