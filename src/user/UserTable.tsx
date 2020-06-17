import React from 'react'
import { User } from '../types/user'
import { Table } from 'antd'
import { standardColumns } from '../table/standard-columns';

interface UserTableProps {
    rows: User[];
}

const UserTable = ({rows}: UserTableProps) => {

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


    return <Table dataSource={rows} columns={columns}/>
}

export default UserTable
