import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import HouseholdMenu from './SimpleMenu'

class Main extends Component {
    render() {
        return (
        <div>
          <div id="menu-outer">
            <h1> Main St Mission </h1>
            <div class="menu-table">
                 <ul id="navbar">
                    <li><a href= "/">Households</a> </li>
                    <li><a href= "/">Donations</a></li>
                    <li><a href= "/">Volunteers</a></li>
                    <li><a href= "/">Admin</a></li>
                    <li id="prof"><a href= "/">Profile</a></li>
                </ul>
            </div>
          </div>
             <div className="Content">

             </div>
       </div>
       );
    }
}

export default Main;