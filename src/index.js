import React from "react"
import ReactDOM from "react-dom"

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo'

import "./index.css"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./components/navigation"
import newHousehold from "./components/newHousehold"
import households from "./components/households"
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

// Pass your GraphQL endpoint to uri

// const client = new ApolloClient({ uri: 'https://api.graph.cool/simple/v1/cjfziljc40ovj0152gg9hr206' });

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cjfziljc40ovj0152gg9hr206'
    })
  ]),
  cache: new InMemoryCache()
});




const ApolloApp = AppComponent => (
	<ApolloProvider client={client}>
	  <AppComponent />
	</ApolloProvider>
  );


ReactDOM.render(
	
	<Container style={{ marginTop: '3em' }}>
     	<ApolloProvider client={client}>
			<BrowserRouter>
				<div>
					<Navigation />
					<Route path="/newhousehold" exact component={newHousehold}/>
					<Route path="/households" exact component={households} />
				</div>
			</BrowserRouter>
		</ApolloProvider>
	</Container>,

	document.getElementById("root")
);