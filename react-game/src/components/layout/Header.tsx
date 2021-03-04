import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link, List, ListItem, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
    },
    list: {
      width: '100%',
      maxWidth: 360,
      // backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'row',
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Box className={classes.root} component="nav">
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
          <ListItem button component={NavLink} to="/statistic" key="statistic">
            Статистика
          </ListItem>
          <ListItem button component={NavLink} to="/about" key="about">
            О проекте
          </ListItem>
        </List>
      </Box>
    </header>
  );
};

export default Header;
