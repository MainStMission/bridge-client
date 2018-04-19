import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Dropdown, List, Header } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'

const HouseholdDropdown = () => (
	<Dropdown text='Household'>
		<Dropdown.Menu>
			<Dropdown.Item as={NavLink} to="/newhousehold" text='New Household' />
			<Dropdown.Item text='New Visit' />
			<Dropdown.Item as={NavLink} to="/households" text='Households' />
			<Dropdown.Item text='Visits' />
		</Dropdown.Menu>
	</Dropdown>
);

const DonationDropdown = () => (
	<Dropdown text='Donations'>
		<Dropdown.Menu>
			<Dropdown.Item text='New Donation' />
			<Dropdown.Item text='Donations' />
			<Dropdown.Item text='Donors' />
			<Dropdown.Item> <a class="item" href="https://www.donortools.com/login">Donor Tools</a></Dropdown.Item>
			<Dropdown.Item> <a class="item" href="https://donorbox.org/org_session/new">Donor Box</a></Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
)

const VolunteerDropdown = () => (
	<Dropdown text='Volunteers'>
		<Dropdown.Menu>
			<Dropdown.Item text='New Volunteer' />
			<Dropdown.Item text='Volunteers' />
		</Dropdown.Menu>
	</Dropdown>
)

const BartDropdown = () => (
	<Dropdown text='Barts'>
		<Dropdown.Menu>
			<Dropdown.Item text='New Bart' />
			<Dropdown.Item text='Barts' />
		</Dropdown.Menu>
	</Dropdown>
)


const AdminDropdown = () => (
	
  <Dropdown text='Admin'>
	<Dropdown.Menu>
    <Dropdown.Item text='Visit Text' />
    <Dropdown.Item text='2nd Harvest' />
    <Dropdown.Item text='Admin' />
  </Dropdown.Menu>
</Dropdown>
)

const Navigation = () => (
  <Header as="h2">
  		  <List horizontal="true" >
			<List.Item><h1>MSM Bridge</h1></List.Item>
  	  		<List.Item><h1><HouseholdDropdown /></h1></List.Item>
  	  		<List.Item><h1><DonationDropdown /></h1></List.Item>
  	  	  	<List.Item><h1><VolunteerDropdown /></h1></List.Item>
  	  	  	<List.Item><h1><BartDropdown /></h1></List.Item>
  	  	  	<List.Item><h1><AdminDropdown /></h1></List.Item>
  	  	</List>
	</Header>
);

export default Navigation;