import React from 'react';
import  ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';
import Layout from './components/Layout';
const app = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Layout />
  </Router>
,app);