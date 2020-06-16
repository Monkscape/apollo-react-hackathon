import React from 'react'
import { User } from './types/user'
import UserList from './UserList'

interface UserManagerProps {
    users: User[];
}

const UserManager = ({users}: UserManagerProps) => {
    return <UserList users={users}/>
}

export default UserManager
