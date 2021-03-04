import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

type TProps = {
  data: any;
};
const List: React.FC<TProps> = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Counter</TableCell>
            <TableCell align="right">Time, s</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.date}
              </TableCell>
              <TableCell align="right">{item.counter}</TableCell>
              <TableCell align="right">{item.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
