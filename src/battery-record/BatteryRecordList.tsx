import React from 'react'
import BatteryRecordEntry from './BatteryRecordEntry'

import { BatteryRecord } from '../types/batteryrecord'

interface BatteryRecordListProps {
    records: BatteryRecord[];
}

const BatteryRecordList = ({records}: BatteryRecordListProps) => {

    const toBatteryRecord = (record: BatteryRecord) => <BatteryRecordEntry record={record}/>

    return (
        <table>
            <tbody>{records.map(toBatteryRecord)}</tbody>
        </table>
    )
}

export default BatteryRecordList
