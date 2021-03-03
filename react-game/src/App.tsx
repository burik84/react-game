import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Statistic from './components/pages/Statistic/Statistic';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <h1>Memory Game</h1>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/statistic" component={Statistic} />
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
