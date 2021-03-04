import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GameCard from '../GameCard/GameCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

type TProps = {
  clickCards: any;
  cardsData: any;
  isGame: boolean;
};

const GameFilds: React.FC<TProps> = ({ clickCards, cardsData, isGame }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        className="game-fields__grid"
      >
        {!isGame && <div className="overflow"></div>}
        {cardsData.map((item: { name: string }, index: number) => (
          <GameCard
            grid={3}
            name={item.name}
            index={index}
            key={index}
            clickCards={clickCards}
          />
        ))}
      </Grid>
    </div>
  );
};

export default GameFilds;
