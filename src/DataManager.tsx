import React, { useState } from 'react';
import './App.css';
import gql from 'graphql-tag';

import {useQuery} from '@apollo/react-hooks'
import BatteryRecordManager from './BatteryRecordManager';
import UserManager from './UserManager';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';

const STARTUP_QUERY = gql`
query getData($showUser: Boolean!) {
    batteryRecords: listBatteryRecords { 
      items {
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
    users: listUsers {
        items {
            name
            email
            timeCreated
        }
    }
  }
`

const DataManager = () => {
    //const [queryData, setQueryData] = useState<any>({})
    const { loading, error, data } = useQuery(STARTUP_QUERY, {
        variables: { showUser: true }
      });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed</p>

    // Put data into state
    //setQueryData(data)

    return (
        <Switch>
            <Route path="/batteryrecords">
                <BatteryRecordManager records={data.batteryRecords.items}/>
            </Route>
            <Route path="/users">
                <UserManager users={data.users.items}/>
            </Route>
        </Switch>
    )
}

export default DataManager
