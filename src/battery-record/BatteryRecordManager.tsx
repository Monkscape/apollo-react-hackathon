import React, { useState, useEffect } from 'react'
import BatteryRecordList from './BatteryRecordList';
import { BatteryRecord } from '../types/batteryrecord';
import BatteryRecordTable from './BatteryRecordTable';

interface BatteryRecordManagerProps {
    records: BatteryRecord[];
}

const BatteryRecordManager = ({records}: BatteryRecordManagerProps) => {
    const [recordsState, setRecordsState] = useState<BatteryRecord[]>([])
    useEffect(() => setRecordsState(records), [])

    const deleteRow = (id: string) => {
        console.log(id)
        const newList = recordsState.filter(record => record.id !== id);
        console.log(newList)
        setRecordsState(newList)
    }

    return <BatteryRecordTable rows={recordsState} deleteRow={deleteRow}/>
}

export default BatteryRecordManager
