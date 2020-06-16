import React from 'react'
import BatteryRecordList from './BatteryRecordList';
import { BatteryRecord } from './types/batteryrecord';

interface BatteryRecordManagerProps {
  records: BatteryRecord[];
}

const BatteryRecordManager = ({records}: BatteryRecordManagerProps) => {
    return <BatteryRecordList records={records}/>
}

export default BatteryRecordManager
