/*jshint esversion: 6 */
import '../index.css';

import React from 'react';
import { Form, Dropdown, Button} from 'semantic-ui-react'
import { render } from 'react-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const GET_HOUSEHOLDS = gql`
  {
    allHouseholds {
      id
      householdName
    }
  }
`


const households = () => (
    <Query query={GET_HOUSEHOLDS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.allHouseholds.map(({ id, householdName }) => (
          <p key={id}>{householdName}</p>
        ));
      }}
    </Query>
  );


export default households;
