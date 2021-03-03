import React, { useState, useEffect, Fragment } from 'react';

type TProps = {
  isGame: boolean;
  startGame: () => void;
  stopGame: () => void;
  changeCounter: () => void;
  changeWinner: any;
  // isLoading: boolean;
  // isResult: boolean;
};
const Game: React.FC<TProps> = ({
  isGame,
  startGame,
  stopGame,
  changeCounter,
  changeWinner,
}) => {
  const [cardsChosen, setCardsChosen] = useState<string[]>([]);
  const [cardsChosenID, setCardsID] = useState<number[]>([]);
  const [cardsWon, setCardWon] = useState<string[]>([]);

  useEffect(() => {
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }, [cardsChosen]);

  useEffect(() => {
    if (cardsWon.length === cardArray.length) {
      changeWinner(true);
    }
  }, [cardsWon]);

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

  const handleClickStart = () => {
    startGame();
    setCardsChosen([]);
    setCardsID([]);
    setCardWon([]);
    // cardArray.sort(() => 0.5 - Math.random());
  };
  const handleClickStop = () => {
    setCardsChosen([]);
    setCardsID([]);
    stopGame();
  };

  const flipCard = (event: any, item: any) => {
    // console.log(event.currentTarget.dataset.id);

    const cardID = event.currentTarget.dataset.id;
    // console.log(cardID, item.name);
    const name: string = item.name;
    setCardsChosen((prev) => [...prev, name]);
    setCardsID((prev) => [...prev, cardID]);
    console.log();
  };
  const checkMatch = () => {
    console.log('проверка совпадений');
    const optionsOneID = cardsChosenID[0];
    const optionsTwoID = cardsChosenID[1];

    const optionsOne = cardsChosen[0];
    const optionsTwo = cardsChosen[1];

    console.log(optionsOneID, optionsTwoID);

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
      <div className="grid" style={styles.grid}>
        {!isGame && <div className="overflow"></div>}
        {cardArray.map((item: { name: string }, index: number) => (
          <div
            className="card"
            data-id={index}
            key={index}
            onClick={(event) => flipCard(event, item)}
          >
            <h6>{item.name}</h6>
            <h3>Card</h3>
          </div>
        ))}
      </div>
      {!isGame && <button onClick={handleClickStart}>Старт</button>}
      {isGame && <button onClick={handleClickStop}>Стоп</button>}
    </Fragment>
  );
};

const styles = {
  grid: {
    gridTemplateColumns: 'repeat(3,1fr)',
  },
};

export default Game;
