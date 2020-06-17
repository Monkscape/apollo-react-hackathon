import React, {useState, useEffect} from 'react'
import { User } from '../types/user'
import UserList from './UserList'
import UserTable from './UserTable'

interface UserManagerProps {
    users: User[];
}

const UserManager = ({users}: UserManagerProps) => {
    const [userState, setUsers] = useState<User[]>([])
    useEffect(() => setUsers(users), [])
    return <UserTable rows={users}/>
}

export default UserManager
