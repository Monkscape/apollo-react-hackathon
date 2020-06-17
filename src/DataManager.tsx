import React from 'react';
import './App.css';
import gql from 'graphql-tag';

import {useQuery} from '@apollo/react-hooks'
import BatteryRecordManager from './battery-record/BatteryRecordManager';
import UserManager from './user/UserManager';
import { Switch, Route, Redirect } from 'react-router-dom';

const limit = 500;

const STARTUP_QUERY = gql`
query getData($limit: Int!) {
    batteryRecords: listBatteryRecords(limit: $limit) { 
      items {
        user {
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
    const { loading, error, data } = useQuery(STARTUP_QUERY, {
        variables: { limit }
      });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed</p>


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
