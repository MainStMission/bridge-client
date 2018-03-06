import React, { Component } from "react";
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome';
import Navbar from './Components/Navbar'


/* class Main extends Component {
 *     render() {
 *         return (
 *         <div>
 *           <div id="menu-outer">
 *             <h1> Main St Mission </h1>
 *             <div class="menu-table">
 *                  <ul id="navbar">
 *                     <li><a href= "/">Households</a> </li>
 *                     <li><a href= "/">Donations</a></li>
 *                     <li><a href= "/">Volunteers</a></li>
 *                     <li><a href= "/">Admin</a></li>
 *                     <li id="prof"><a href= "/">Profile</a></li>
 *                 </ul>
 *             </div>
 *           </div>
 *              <div className="Content">
 * 
 *              </div>
 *        </div>
 *        );
 *     }
 * }
 * 
 * export default Main;
 * 
 * */

const items = [
    {
        dropdown: true,
        title: 'Households',
        items: [
            {
                name: 'New Household',
                href: '/household'
            },
            {
                name: 'New Visit',
                href: '/visit'
            },
            {
                name: 'Households',
                href: '/households'
            },
            {
                name: 'Visits',
                href: '/visits'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Donations',
        items: [
            {
                name: 'New Donation',
                href: '/donation'
            },
            {
              name: 'Donations',
              href: '/donations'
            },
            {
                name: 'Doners',
                href: '/doners'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Admin',
        items: [
            {
                name: 'New Volunteer',
                href: '/volunteer'
            },
            {
              name: 'Volunteers',
              href: '/volunteers'
            },
            {
                name: 'Visit Text',
                href: '/vtext'
            },
            {
              name: '2nd Harvest',
              href: '/harvest'
            },
            {
                name: 'Admin',
                href: '/admin'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Profile',
        items: [
            {
                name: 'Edit Profile',
                href: '/profile'
            },
            {
              name: 'Sign Out',
              href: '/out'
            }
        ]
    }
]

// eslint-disable-next-line
const brand = {
    title: 'Main St. Mission',
    href: 'http://www.google.com'
}
// Primary: Nav background,
// Secondary: Borders, highlights, dropdowns
// primaryText: all on the primary background,
// secondaryText: all text on the secondary color

const theme1 = {
    primary: 'white',
    secondary: '#2BD9FE',
    text: 'black'
}
// eslint-disable-next-line
const theme2 = {
    primary: '#6E2594',
    secondary: '#05668D',
    text: 'white'
}

export default class Main extends Component {
    render() {
        return (
            <div>
            <div id="title">
            <h1><a href="/">Main St Mission</a></h1>
            </div>
              <Navbar theme={ theme2 }  items={ items } />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'))