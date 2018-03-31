import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Household from './components/household';

ReactDOM.render(
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Nav} />
          <Route path="/household" component={Household}/>
        </div>
      </BrowserRouter>
    </div>,
    document.getElementById('root')
);