import React, { useState, useEffect } from 'react'
import BatteryRecordList from './BatteryRecordList';
import { BatteryRecord } from '../types/batteryrecord';

interface BatteryRecordManagerProps {
    records: BatteryRecord[];
}

const BatteryRecordManager = ({records}: BatteryRecordManagerProps) => {
    const [recordsState, setRecords] = useState<BatteryRecord[]>([])
    useEffect(() => setRecords(records), [])
    return <BatteryRecordList records={recordsState}/>
}

export default BatteryRecordManager
