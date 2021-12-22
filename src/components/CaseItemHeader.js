import React, { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import CaseList from './CaseList';
import "../App.css";

function CaseItemHeader(props) {
    const [down,setdown]=useState(true);
    const click=()=>{
        setdown(!down);
    }
   
    return (
        <div>
            {props.trunkname} 
            
            {down ? <KeyboardArrowUpRoundedIcon onClick={click}/>:
            <>
            <KeyboardArrowDownRoundedIcon onClick={click}/>
           
            <CaseList />
            
            </>}
           
        </div>
    )
}

export default CaseItemHeader