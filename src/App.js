import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import News from './components/News';
import Contents from './components/Contents';

function App() {
  return (
    <Router>
          <div>           

              <header className="title">
                <Link to="/news">新闻</Link>
                <br />
                <Link to="/content">详情</Link>

              </header>
              <Route path="/news" component={News} />    
              <Route path="/content" component={Contents} />                 
          </div>
      </Router>
  );
}

export default App;
