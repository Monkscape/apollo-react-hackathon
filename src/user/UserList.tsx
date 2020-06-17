import React from 'react'
import { User } from '../types/user'
import UserEntry from './UserEntry'

interface UserListProps {
    users: User[]
}

const UserList = ({users}: UserListProps) => {
    const toUserEntry = (user: User) => <UserEntry user={user}/>

    return (
        <table>
            <tbody>{users.map(toUserEntry)}</tbody>
        </table>
    )
}

export default UserList
