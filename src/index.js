import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Route } from "react-router-dom"
import Nav from "./components/nav"
import Household from "./components/household"
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'



ReactDOM.render(
	
	<Container style={{ marginTop: '3em' }}>
	    <Nav />
		<BrowserRouter>
			<div>
				<Route path="/household" component={Household}/>
			</div>
		</BrowserRouter>
	</Container>,
	document.getElementById("root")
);