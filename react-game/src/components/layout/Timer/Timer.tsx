import React, { useState, useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';

type TProps = {
  winner: boolean;
  isGame: boolean;
  stopTimer: any;
  stopGame: () => void;
};

const Timer: React.FC<TProps> = ({ winner, isGame, stopGame, stopTimer }) => {
  const [timer, setTimer] = useState(0);
  const id: any = useRef(null);
  const clear = () => {
    clearInterval(id.current);
  };
  useEffect(() => {
    id.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    // if (timer >= 500) {
    //   clear();
    // }
    if (winner && isGame) {
      stopTimer(timer);
      stopGame();
    }
  }, [winner, isGame]);

  return <Box>Время: {timer}</Box>;
};

export default Timer;
