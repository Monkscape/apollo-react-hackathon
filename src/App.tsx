import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks'
import DataManager from './DataManager';
import Header from './Header';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY
  }
})

function App() {

  return (
    <Router>
      <Header/>
      <ApolloProvider client={client}>
        <DataManager/>
      </ApolloProvider>
    </Router>
  );
}

export default App;
