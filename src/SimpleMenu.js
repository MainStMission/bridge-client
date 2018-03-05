import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class HouseHoldMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <li>
        <Button
          aria-owns={anchorEl ? 'menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Households
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>New Household </MenuItem>
          <MenuItem onClick={this.handleClose}>New Visit</MenuItem>
          <MenuItem onClick={this.handleClose}>Households</MenuItem>
          <MenuItem onClick={this.handleClose}>Visits</MenuItem>
        </Menu>
      </li>
    );
  }
}

class DonationMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <li>
                <Button
                    aria-owns={anchorEl ? 'menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Donations
                </Button>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>New Donation</MenuItem>
                    <MenuItem onClick={this.handleClose}>Donations</MenuItem>
                </Menu>
            </li>
        );
    }
}

export default HouseHoldMenu;