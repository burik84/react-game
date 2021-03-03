import React, { useEffect, useState } from 'react';
import { getName, getData } from '../../../services/getDate';

const Statistic = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const user: any = getName();
    setName(user);
  }, []);
  return (
    <div>
      <h3>Страница статистики </h3>
      {name.length > 1 ? { name } : 'No Name'}
      <p>Статистика отсутствует</p>
    </div>
  );
};

export default Statistic;
