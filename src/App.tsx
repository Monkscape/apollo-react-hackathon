import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import { ApolloProvider } from '@apollo/react-hooks'
import BatteryRecordManager from './BatteryRecordManager';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BatteryRecordManager/>
    </ApolloProvider>
  );
}

export default App;
