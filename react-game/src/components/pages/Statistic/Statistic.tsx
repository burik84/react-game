import React, { useEffect, useState } from 'react';
import { getName, getData } from '../../../services/getDate';
import List from '../../layout/List/List';

const Statistic = () => {
  const [name, setName] = useState('');
  const [dataArray, setData] = useState([]);

  function createData(arr: any) {
    const date: any = arr[0];
    const time: number = arr[1];
    const counter: number = arr[2];
    return { date, time, counter };
  }
  useEffect(() => {
    const user: any = getName();
    const data: [] = getData()
      .map((item: any) => createData(item))
      .sort(
        (item1: { time: number }, item2: { time: number }) =>
          item1.time - item2.time
      );
    setName(user);
    setData(data);
  }, []);

  return (
    <div>
      <h3>Страница статистики </h3>
      {dataArray.length > 0 ? (
        <List data={dataArray} />
      ) : (
        <p>Статистика отсутствует</p>
      )}
    </div>
  );
};

export default Statistic;
