import React, { useState, useEffect, Fragment } from 'react';
import GameFields from '../layout/GameFields/GameFields';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

type TProps = {
  isGame: boolean;
  startGame: () => void;
  stopGame: () => void;
  changeCounter: () => void;
  changeWinner: any;
  // isLoading: boolean;
  // isResult: boolean;
};

const cardArray = [
  {
    name: 'fries',
    // img:'./assets/images/fries.png',
  },
  {
    name: 'fries',
    // img:'./assets/images/fries.png',
  },
  {
    name: 'cheeseburger',
    // img:'./assets/images/cheeseburger.png',
  },
  {
    name: 'cheeseburger',
    // img:'./assets/images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    // img:'./assets/images/hotdog.png',
  },
  {
    name: 'hotdog',
    // img:'./assets/images/hotdog.png',
  },
  {
    name: 'ice-cream',
    // img:'./assets/images/ice-cream.png',
  },
  {
    name: 'ice-cream',
    // img:'./assets/images/ice-cream.png',
  },
  {
    name: 'milkshake',
    // img:'./assets/images/milkshake.png',
  },
  {
    name: 'milkshake',
    // img:'./assets/images/milkshake.png',
  },
  {
    name: 'pizza',
    // img:'./assets/images/pizza.png',
  },
  {
    name: 'pizza',
    // img:'./assets/images/pizza.png',
  },
];

const Game: React.FC<TProps> = ({
  isGame,
  startGame,
  stopGame,
  changeCounter,
  changeWinner,
}) => {
  const classes = useStyles();

  const [cardsChosen, setCardsChosen] = useState<string[]>([]);
  const [cardsChosenID, setCardsID] = useState<number[]>([]);
  const [cardsWon, setCardWon] = useState<string[]>([]);
  const [cardsData, setCardsData] = useState(cardArray);

  useEffect(() => {
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }, [cardsChosen]);

  useEffect(() => {
    if (cardsWon.length === cardArray.length) {
      changeWinner(true);
    }
  }, [cardsWon]);

  const handleClickStart = () => {
    startGame();
    setCardsChosen([]);
    setCardsID([]);
    setCardWon([]);
    cardArray.sort(() => 0.5 - Math.random());
    setCardsData(cardArray);
  };
  const handleClickStop = () => {
    setCardsChosen([]);
    setCardsID([]);
    stopGame();
  };

  const flipCard = (event: any, name: string) => {

    const cardID = event.currentTarget.dataset.id;
    setCardsChosen((prev) => [...prev, name]);
    setCardsID((prev) => [...prev, cardID]);
  };
  const checkMatch = () => {
    const optionsOneID = cardsChosenID[0];
    const optionsTwoID = cardsChosenID[1];

    const optionsOne = cardsChosen[0];
    const optionsTwo = cardsChosen[1];

    if (optionsOneID === optionsTwoID) {
      console.log('Нажали на одну и ту же карточку');
    } else if (optionsOne === optionsTwo) {
      console.log('есть совпадение');

      setCardWon((prev) => [...prev, ...cardsChosen]);
    } else {
      console.log('совпадений нет');
    }
    setCardsChosen([]);
    setCardsID([]);
    changeCounter();
  };
  console.log(cardsWon);

  return (
    <Fragment>
      <div className="game-fields">
        <GameFields
          clickCards={flipCard}
          cardsData={cardsData}
          isGame={isGame}
          cardsDataWon={cardsWon}
          cardsChosenID={cardsChosenID}
        />
        {!isGame && (
          <div className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickStart}
            >
              Старт
            </Button>
          </div>
        )}

        {isGame && (
          <div className={classes.root}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickStop}
            >
              Стоп
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const styles = {
  grid: {
    gridTemplateColumns: 'repeat(3,1fr)',
  },
};

export default Game;
