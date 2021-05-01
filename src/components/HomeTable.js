import React from 'react';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import questions from '../Data/questions'
import TablePagination from '@material-ui/core/TablePagination';
const useStyles2 = makeStyles((theme)=>({
  table: {
    width:'100%'
  },
  head:{
    backgroundColor:theme.palette.info.dark,
    color:'#eceff1'
  },
  tableBody:{
    background:'#f5f5f5'
  }
}));





const HomeTable=(props)=> {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, questions.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 const rowsPerPageOptions=[10,15,25]
  return (
    <Grid container  xs={12} lg={9}>
    <Grid item xs={12}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
      <TableRow className={classes.head}>
      
      <TableCell style={{ width: '160',color:'white' }} >
                Title
              </TableCell>
              <TableCell style={{ width: '60px',color:'white' }} align="right">
                Tags
              </TableCell>
              <TableCell style={{ width: '60px',color:'white' }} align="right">
                Difficulty
              </TableCell>
              <TableCell style={{ width: '60px',color:'white' }} align="right">
                Submissions
              </TableCell>


      </TableRow>
      </TableHead>
      
        <TableBody>
          {(rowsPerPage > 0
            ? questions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : questions
          ).map((question,index) => (
            <TableRow key={index} className={(index+1)%2==0&&classes.tableBody} >
              <TableCell style={{ width: '160px',color:'#01579b' }} component="th" scope="row">
                {question.title}
              </TableCell>
              <TableCell style={{ width: '60px',color:'#01579b' }} align="right">
                {question.tag}
              </TableCell>
              <TableCell style={{ width: '60px',color:'#01579b' }} align="right">
                {question.difficulty}
              </TableCell>
              <TableCell style={{ width: '60px',color:'#01579b' }} align="right">
                {question.submissions}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
        
    
        
      </Table>
      </Grid>
      <Grid item sm={12}>
      <TablePagination 
        
        component="div"
        count={questions.length}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </Grid>
    </Grid>
  );
}
export default HomeTable;