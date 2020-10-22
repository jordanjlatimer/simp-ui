import React, { useState } from 'react';
import "./range-input.sass"
import PropTypes from "prop-types"

function RangeInput(props){
  const [value, setValue] = useState(props.initial)

  return(
    <div className="range-input">
      <p className="range-input-label">{props.label}</p>
      <p className="range-input-value">
        {props.prefix}{value}{props.suffix}
      </p>
      <input 
        className="range-input-slider" 
        type="range" 
        min={props.min} 
        max={props.max}
        step={props.step}
        value={value}
        onChange={e => setValue(e.target.value)}
        />
    </div>
  )
}

RangeInput.displayName = "RangeInput";

RangeInput.propTypes = {
  initial: PropTypes.number,
  label: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
}

export default RangeInput