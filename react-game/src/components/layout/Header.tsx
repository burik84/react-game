import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <nav>
        <Typography className={classes.root} align="center">
          <NavLink to="/" color="primary">
            Главная
          </NavLink>
          <NavLink to="/statistic" color="primary">
            Статистика
          </NavLink>
          <NavLink to="/about" color="primary">
            О проекте
          </NavLink>
        </Typography>
      </nav>
    </header>
  );
};

export default Header;
