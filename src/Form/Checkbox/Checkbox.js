import React, { useState } from 'react';
import "./checkbox.sass"
import PropTypes from "prop-types"

function Checkbox(props){
  const [checked, setChecked] = useState(props.checked)
  
  return(
    <div 
      className="checkbox"
      onClick={() => setChecked(!checked)}
      tabIndex="0"
    >
      {props.labelPosition === "left" ? <p className="checkbox-label left">{props.label}</p> : null}
      <div className="checkbox-outer">
        <div className={"checkbox-inner" + (checked ? " checked" : "")}/>
      </div>
      {props.labelPosition === "left" ? null : <p className="checkbox-label right">{props.label}</p>}
    </div>
  )
}

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  labelPosition: PropTypes.string
}

export default Checkbox