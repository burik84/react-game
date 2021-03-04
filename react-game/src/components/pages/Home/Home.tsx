import React, { useState, useEffect } from 'react';

import { setData } from '../../../services/setData';
import Game from '../../Game/Game';

import Loader from '../../Loader/Loader';
import Timer from '../../layout/Timer/Timer';
import Results from '../../layout/Results/Results';

type TProps = {
  // isGame: boolean;
  // buttonStart: any;
  // isLoading: boolean;
  // isResult: boolean;
};

const Home: React.FC<TProps> = () => {
  const [isGame, setStartGame] = useState<boolean>(false);
  const [winner, setWinner] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);
  const [resultTime, setResultTime] = useState<number>(0);

  const startGame = () => {
    setStartGame(true);
    setCounter(0);
    setResultTime(0);
    setWinner(false);
    console.log('start game');
    // console.log(result);
  };

  const stopGame = () => {
    console.log('stop game');
    setStartGame(false);
  };

  const changeCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const changeWinner = (value: boolean) => {
    setWinner(value);
  };

  const stopTimer = (time: number) => {
    setResultTime(time);
    setData(time, counter);
  };
  console.log('состояние победы - ', winner);
  return (
    <div>
      {isGame && (
        <Timer
          winner={winner}
          isGame={isGame}
          stopGame={stopGame}
          stopTimer={stopTimer}
        />
      )}
      {isGame && <p>Количество ходов: {counter}</p>}
      {!isGame && (
        <p>
          {' '}
          На экране показаны картинки. Вам необходимо собрать пары из картинок
          за короткое время.{' '}
        </p>
      )}
      <Game
        isGame={isGame}
        startGame={startGame}
        stopGame={stopGame}
        changeCounter={changeCounter}
        changeWinner={changeWinner}
      />
      {winner && <Results counter={counter} time={resultTime} />}
    </div>
  );
};

export default Home;
