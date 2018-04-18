import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import "./index.css"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./components/navigation"
import Household from "./components/household"
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  // link: new HttpLink({ uri: 'http://localhost:4466/hackernews-graphql-js/dev'}),
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjfziljc40ovj0152gg9hr206' }),
  cache: new InMemoryCache(),
});



ReactDOM.render(
	
	<Container style={{ marginTop: '3em' }}>

		<BrowserRouter>
			<div>
				<Navigation />
				<Route path="/household" component={Household}/>
			</div>
		</BrowserRouter>
	</Container>,

	document.getElementById("root")
);