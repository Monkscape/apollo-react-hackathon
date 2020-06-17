import React from 'react'
import { Table } from 'antd'
import { BatteryRecord } from '../types/batteryrecord'
import { standardColumns } from '../table/standard-columns';
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag';

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
            render: (user: any) => (user.name),
            defaultSortOrder: 'descend',
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
            onFilter: (value: string, record: any) => record.isCharging === value,
            render: (isCharging: boolean) => isCharging.toString()
        },
        {
            title: 'Temperature',
            dataIndex: 'temperature',
            key: 'temperature',
            sorter: (a: any,b: any) => a.temperature.length - b.temperature.length
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

    return <Table dataSource={createRows(rows)} columns={columns}/>
}

export default BatteryRecordTable
