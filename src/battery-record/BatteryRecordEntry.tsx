import React from 'react'
import { BatteryRecord } from '../types/batteryrecord'

interface BatteryRecordEntry {
    record: BatteryRecord;
}

const BatteryRecordEntry = ({record}: BatteryRecordEntry) => {
    const userColumn = (record.user) ? <td>{record.user.name}</td> : <></>

    const timeCreated = new Date(record.timeCreated);

    return (
        <tr key={record.id}>
            <td>{record.isCharging.toString()}</td>
            <td>{record.temperature}</td>
            {userColumn}
            <td>{record.timeRemaining}</td>
            <td>{record.batteryPercentage}</td>
            <td>{timeCreated.toDateString()}</td>
            <td>{timeCreated.toTimeString()}</td>
        </tr>
    )
}

export default BatteryRecordEntry
