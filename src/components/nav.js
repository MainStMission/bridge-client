import React from 'react'
import { Dropdown, List, Header } from 'semantic-ui-react'

const HouseholdDropdown = () => (
	<Dropdown text='Households'>
		<Dropdown.Menu>
			<Dropdown.Item text='New Household' />
			<Dropdown.Item text='New Visit' />
			<Dropdown.Item text='Households' />
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
			<Dropdown.Item text='Donortools' />
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
    <Dropdown.Item text='New Volunteer' />
    <Dropdown.Item text='Volunteers' />
    <Dropdown.Item text='Visit Text' />
    <Dropdown.Item text='2nd Harvest' />
    <Dropdown.Item text='Admin' />
  </Dropdown.Menu>
</Dropdown>
)

const Nav = () => (
  <Header as="h2">
<List>
  <List.Item><HouseholdDropdown /></List.Item>
  <List.Item><DonationDropdown /></List.Item>
  <List.Item><VolunteerDropdown /></List.Item>
  <List.Item><BartDropdown /></List.Item>
  <List.Item><AdminDropdown /></List.Item>
</List>
</Header>
)
export default Nav;