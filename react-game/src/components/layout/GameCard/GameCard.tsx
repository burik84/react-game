import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 105,
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
  isGame: boolean;
  cardsDataWon: any;
  cardsChosenID: any;
};

const GameCard: React.FC<TProps> = ({
  grid,
  name,
  index,
  clickCards,
  isGame,
  cardsDataWon,
  cardsChosenID,
}) => {
  const classes = useStyles();
  let text: string = '';
  let answer: boolean = false;
  const isFlip = () => {
    if (index === +cardsChosenID[0] || index === +cardsChosenID[1]) {
      return isGame ? name : name;
    } else {
      return isGame ? 'Unknown' : name;
    }
  };
  text = isFlip();
  cardsDataWon.forEach((item: string) => {
    if (name === item) {
      text = name;
      answer = true;
    }
  });

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
          <Typography variant="h6" component="h3">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GameCard;
