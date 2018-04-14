import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import MenuIcon from 'material-ui-icons/Menu'
import NewShopIcon from 'material-ui-icons/AddShoppingCart'
import DraftsIcon from 'material-ui-icons/Drafts'
import PersonAddIcon from 'material-ui-icons/PersonAdd'
import AttachMoneyIcon from 'material-ui-icons/AttachMoney'
import HomeIcon from 'material-ui-icons/Home'
import LocalAtmIcon from 'material-ui-icons/LocalAtm'
import SwapHorizIcon from 'material-ui-icons/SwapHoriz'
import ListIcon from 'material-ui-icons/List'
import SendIcon from 'material-ui-icons/Send'
import MailIcon from 'material-ui-icons/Mail'
import DeleteIcon from 'material-ui-icons/Delete'
import ReportIcon from 'material-ui-icons/Report'
import Household from './household'

import {NavLink, BrowserRouter, Route} from 'react-router-dom'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


const householdListItems = (
	<div>
		<div>
		<ListItem button component={NavLink} to="/household">
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="New Household" />
		</ListItem>
		<BrowserRouter>
			<Route path="/houshold" component={Household} />
		</BrowserRouter>
		</div>
		<ListItem button>
			<ListItemIcon>
				<NewShopIcon />
			</ListItemIcon>
			<ListItemText primary="New Visit" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ListIcon />
			</ListItemIcon>
			<ListItemText primary="Households" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ListIcon />
			</ListItemIcon>
			<ListItemText primary="Visits" />
		</ListItem>
	</div>
)

const donorListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<MailIcon />
			</ListItemIcon>
			<ListItemText primary="New Donation" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ListIcon />
			</ListItemIcon>
			<ListItemText primary="Donations" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ListIcon />
			</ListItemIcon>
			<ListItemText primary="Donors" />
		</ListItem>
		<ListItem button component="a" href="https://www.donortools.com/"> 
			<ListItemIcon>
				<AttachMoneyIcon />
			</ListItemIcon>
			<ListItemText primary="Donor Tools"  />
		</ListItem>
	</div>
);

const volunteerListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<PersonAddIcon />
			</ListItemIcon>
			<ListItemText primary="New Volunteer" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ListIcon />
			</ListItemIcon>
			<ListItemText primary="Volunteers" />
		</ListItem>
	</div>
);

const bartListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<LocalAtmIcon />
			</ListItemIcon>
			<ListItemText primary="Issue Barts" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SwapHorizIcon />
			</ListItemIcon>
			<ListItemText primary="Exchange Barts" />
		</ListItem>
	</div>
);

const adminListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<MailIcon />
			</ListItemIcon>
			<ListItemText primary="2nd Harvest" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<MailIcon />
			</ListItemIcon>
			<ListItemText primary="Admin" />
		</ListItem>
	</div>
);


class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{householdListItems}</List>
        <Divider />
        <List>{donorListItems}</List>
        <Divider />
        <List>{volunteerListItems}</List>
        <Divider />
        <Divider />
        <List>{bartListItems}</List>
        <Divider />
        <List>{adminListItems}</List>
        <Divider />
      </div>
    );


    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer('left', true)} />
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);