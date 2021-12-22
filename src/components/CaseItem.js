import React from 'react'
import MuiCheckBox from './MuiCheckBox';

function CaseItem(props) {
    const [checked, setChecked] = React.useState(false);


    const handleChange = (event) => {
    setChecked(event.target.checked);
    if(checked===false){
        console.log("Checked");
        props.onchange();
    }else{
        console.log("Box Unchecked");
        props.onchanged();
        console.log("UnChecked");
    }
    
    
    
    };

    return (
        <div>
        {props.check ?<MuiCheckBox value={props.value} checked={checked} handleChange={handleChange}/>:""}{props.item}
        </div>
    )
}

export default CaseItem
