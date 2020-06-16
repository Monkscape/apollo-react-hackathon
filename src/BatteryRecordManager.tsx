import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import BatteryRecordList from './BatteryRecordList';

const BATTERY_DATA = gql`
query getRecords($showUser: Boolean!) {
    batteryRecords: listBatteryRecords { 
      records: items {
        user @include(if: $showUser) {
          name
        }
        id
        timeRemaining
        batteryPercentage
        temperature
        isCharging
        timeCreated
      }
    }
  }
`

const BatteryRecordManager = () => {

    const { loading, error, data } = useQuery(BATTERY_DATA, {
        variables: { showUser: true }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed</p>

    return <BatteryRecordList records={data.batteryRecords.records}/>
}

export default BatteryRecordManager
