import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  })
);

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" component="h2">
        О приложении
      </Typography>
      <Typography component="p">
        На экране показаны картинки. Вам необходимо собрать пары из картинок за
        короткое время.
      </Typography>

      <Typography component="p">Кнопка Старт перемешивает карточки</Typography>
      <Typography component="p">
        Статистика. Представлены результаты предыдущих игр.
      </Typography>
      <Typography component="p">Приложение в стадии разработке.</Typography>
    </div>
  );
};

export default About;
