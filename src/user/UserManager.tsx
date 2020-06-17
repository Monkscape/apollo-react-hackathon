import React, {useState, useEffect} from 'react'
import { User } from '../types/user'
import UserList from './UserList'

interface UserManagerProps {
    users: User[];
}

const UserManager = ({users}: UserManagerProps) => {
    const [userState, setUsers] = useState<User[]>([])
    useEffect(() => setUsers(users), [])
    return <UserList users={userState}/>
}

export default UserManager
