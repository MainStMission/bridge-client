import React from "react"
import ReactDOM from "react-dom"
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
  link: new HttpLink(),
  cache: new InMemoryCache(),
});



ReactDOM.render(
	
	<Container style={{ marginTop: '3em' }}>
	<h1>Main Street Mission</h1>

		<BrowserRouter>
			<div>
				<Navigation />
				<Route path="/household" component={Household}/>
			</div>
		</BrowserRouter>
	</Container>,

	document.getElementById("root")
);