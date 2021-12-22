import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CaseItem from './CaseItem';
import {useContext} from 'react';
import { GlobalInfo } from '../App';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('yoghurt', 159, 6.0, 24, 4.0),
    createData('sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Bread', 356, 16.0, 49, 3.9),
  ];


function CaseList(props) {
  const {getdata}=useContext(GlobalInfo);

    return (
        <div>
        
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}>
              <TableCell>
              <CaseItem check={true} value={row.carbs} item={row.name} onchange={()=>getdata(row.carbs)} onchanged={()=>getdata(-row.carbs)}/>
              </TableCell>
              <TableCell align="right"><CaseItem check={false} item={row.calories}/></TableCell>
              <TableCell align="right"><CaseItem check={false} item={row.carbs} value={row.name} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
    )
}

export default CaseList
