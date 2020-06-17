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
    return <BatteryRecordTable rows={recordsState}/>
}

export default BatteryRecordManager
