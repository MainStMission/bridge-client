import React, { Component } from "react";

class Main extends Component {
    render() {
    return (
        <div>
            <h1> Main Street Mission </h1>
                <ul className="header">
                    <li><a href= "/">Households</a></li>
                    <li><a href= "/">Donations</a></li>
                    <li><a href= "/">Volunteers</a></li>
                    <li><a href= "/">Admin</a></li>
                    <li><a href= "/">Profile</a></li>
                </ul>
                <div className="Content">

                </div>
        </div>
       );
    }
}

export default Main;