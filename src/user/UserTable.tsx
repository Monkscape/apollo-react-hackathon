import React from 'react'
import { User } from '../types/user'
import { Table } from 'antd'
import { standardColumns } from '../table/standard-columns';

interface UserTableProps {
    rows: User[];
}

const UserTable = ({rows}: UserTableProps) => {

    const createRows = (users: User[]): any => users.map(user => {
        const createdAt = new Date(user.timeCreated)
        return {
            ...user, 
            timeCreated: createdAt.toTimeString(),
            dateCreated: createdAt.toDateString()
        }
    });
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        ...standardColumns
    ]


    return <Table dataSource={createRows(rows)} columns={columns}/>
}

export default UserTable
