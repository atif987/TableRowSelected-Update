import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function MuiCheckBox(props) {


  return (
    <Checkbox
      checked={props.checked}
      onChange={props.handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      value={props.value}
    />
  );
}
