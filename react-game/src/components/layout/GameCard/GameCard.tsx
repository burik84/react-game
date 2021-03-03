import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

type TProps = {
  grid: any;
  classes: string;
  name: string;
  index: number;
  clickCards: any;
};

const GameCard: React.FC<TProps> = ({
  grid,
  classes,
  name,
  index,
  clickCards,
}) => {
  return (
    <Grid
      item
      xs={grid}
      onClick={(e) => clickCards(e, name)}
      data-id={index}
      className="card"
    >
      <Paper className={classes}>
        <h4>{name}</h4>
        <h3>Cards</h3>
      </Paper>
    </Grid>
  );
};

export default GameCard;
