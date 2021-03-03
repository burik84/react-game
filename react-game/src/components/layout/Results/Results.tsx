import React, { useEffect } from 'react';

type TProps = {
  counter: number;
  time: number;
};

const Results: React.FC<TProps> = ({ counter, time }) => {
  return (
    <div>
      <h3>Ваши результаты</h3>
      <p>
        Количество ходов: {counter}, ваше время: {time}
      </p>
    </div>
  );
};

export default Results;
