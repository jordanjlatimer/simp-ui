import React, { useState } from 'react';

export function RangeInput(props){
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