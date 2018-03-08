import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Navbar from './Components/Navbar'
import Household from "./Components/household";

import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";

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
    href: '/'
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