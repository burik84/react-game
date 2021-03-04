import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Statistic from './components/pages/Statistic/Statistic';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      height: '100vh',
      width: '100%',
      position: 'relative',
    },
    footer: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Container>
          <Grid
            container
            spacing={1}
            direction="row"
            className={classes.grid}
          >
            <Grid item xs={12} >
              <Paper className={classes.paper}>
                <Header />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/statistic" component={Statistic} />
              </Switch>
            </Grid>
            <Grid item xs={12} className={classes.footer}>
              <Paper className={classes.paper}>
                <Footer />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </div>
  );
}

export default App;
