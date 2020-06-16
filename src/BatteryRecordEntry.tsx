import React from 'react'
import { BatteryRecord } from './types/batteryrecord'

interface BatteryRecordEntry {
    record: BatteryRecord;
}

const BatteryRecordEntry = ({record}: BatteryRecordEntry) => {
    const userColumn = (record.user) ? <td>{record.user.name}</td> : <></>

    return (
        <tr key={record.id}>
            <td>{record.isCharging.toString()}</td>
            <td>{record.temperature}</td>
            {userColumn}
            <td>{record.timeCreated}</td>
            <td>{record.timeRemaining}</td>
            <td>{record.batteryPercentage}</td>
        </tr>
    )
}

export default BatteryRecordEntry
