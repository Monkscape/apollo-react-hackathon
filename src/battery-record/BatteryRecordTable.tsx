import React from 'react'
import { Table } from 'antd'
import { BatteryRecord } from '../types/batteryrecord'
import { standardColumns } from '../table/standard-columns';

interface BatteryRecordTableProps {
    rows: BatteryRecord[];
}

const BatteryRecordTable = ({rows}: BatteryRecordTableProps) => {

    const createRows = (records: BatteryRecord[]): any => records.map(record => {
        const createdAt = new Date(record.timeCreated)
        return {
            ...record, 
            timeCreated: createdAt.toTimeString(),
            dateCreated: createdAt.toDateString()
        }
    });

    const columns = [
        {
            title: 'User Name',
            dataIndex: 'user',
            key: 'user',
            render: (user: any) => (user.name)
        },
        {
            title: 'Battery Percentage',
            dataIndex: 'batteryPercentage',
            key: 'batteryPercentage',
            render: (percentage: string) => percentage + ('%')
        },
        {
            title: 'Currently Charging',
            dataIndex: 'isCharging',
            key: 'isCharging',
            render: (isCharging: boolean) => isCharging.toString()
        },
        {
            title: 'Temperature',
            dataIndex: 'temperature',
            key: 'temperature'
        },
        {
            title: 'Time Remaining',
            dataIndex: 'timeRemaining',
            key: 'timeRemaining'
        },
        ...standardColumns
    ]

    return <Table dataSource={createRows(rows)} columns={columns}/>
}

export default BatteryRecordTable
