import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    card: {
      cursor: 'pointer',
    },
  })
);
type TProps = {
  grid: any;
  name: string;
  index: number;
  clickCards: any;
};

const GameCard: React.FC<TProps> = ({ grid, name, index, clickCards }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={3}
      onClick={(e) => clickCards(e, name)}
      data-id={index}
      className={classes.card}
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h3">
            {name}
          </Typography>
          <Typography variant="h5" component="h3">
            Cards
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GameCard;
