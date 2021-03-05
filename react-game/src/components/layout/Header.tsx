import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Link,
  List,
  ListItem,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      flexGrow: 1,
    },
    list: {
      width: '100%',
      maxWidth: 360,
      // backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="h1" className={classes.title}>
            {' '}
            Memory Game{' '}
          </Typography>
          <List component="ul" className={classes.list}>
            <ListItem
              button
              component={NavLink}
              to="/"
              activeClassName="Mui-selected"
              key="home"
            >
              Главная
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/statistic"
              key="statistic"
            >
              Статистика
            </ListItem>
            <ListItem button component={NavLink} to="/about" key="about">
              О проекте
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
