import React from 'react'
import { Table } from 'antd'
import { BatteryRecord } from '../types/batteryrecord'
import { standardColumns } from '../table/standard-columns';
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag';
import { ColumnsType } from 'antd/lib/table';

interface BatteryRecordTableProps {
    rows: BatteryRecord[];
    deleteRow: (id: string) => void;
}

const DELETE_BATTERY_RECORD = gql`
    mutation deleteBatteryRecord($id: ID!) {
        deleteBatteryRecord(id: $id) {
            id
        }
    }
`

const BatteryRecordTable = ({rows, deleteRow}: BatteryRecordTableProps) => {

    const [deleteBatteryRecord, {data, error}] = useMutation(DELETE_BATTERY_RECORD)

    const columns: ColumnsType<BatteryRecord> = [
        {
            title: 'User Name',
            dataIndex: 'user',
            key: 'user',
            render: (user: any) => (user.name),
            sorter: (a: any,b: any) => a.user.name.length - b.user.name.length
        },
        {
            title: 'Battery Percentage',
            dataIndex: 'batteryPercentage',
            key: 'batteryPercentage',
            render: (percentage: string) => percentage + ('%'),
            sorter: (a: any,b: any) => a.batteryPercentage - b.batteryPercentage
        },
        {
            title: 'Currently Charging',
            dataIndex: 'isCharging',
            key: 'isCharging',
            filters: [
                {
                    text: 'True',
                    value: true
                },
                {
                    text: 'False',
                    value: false
                }
            ],
            onFilter: (value: any, record: BatteryRecord) => record.isCharging === value,
            render: (isCharging: boolean) => isCharging.toString()
        },
        {
            title: 'Temperature',
            dataIndex: 'temperature',
            key: 'temperature',
            sorter: (a: any,b: any) => a.temperature - b.temperature
        },
        {
            title: 'Time Remaining',
            dataIndex: 'timeRemaining',
            key: 'timeRemaining'
        },
        ...standardColumns,
        {
            title: 'Delete',
            key: 'delete',
            render: (text: any, record: BatteryRecord) => (
                <a onClick={() => {
                    deleteBatteryRecord({variables: { id: record.id}})
                    deleteRow(record.id)
                }}>Delete</a>
            )
        }
    ]

    return <Table dataSource={rows} columns={columns}/>
}

export default BatteryRecordTable
