import React from 'react';
import { useState } from 'react';

export function RadioInput(props){
  const [selected, setSelected] = useState(-1)

  return(
    <div 
      className="radio-input"
    >
      <p className="radio-input-label">{props.label}</p>
      <div className={"radio-input-control" + (props.segmented ? " segmented" : "") + (props.horizontal ? " horizontal" : "")}>
        {props.options.map((option, index) => {
          return props.segmented ? (
            <div 
              className={"radio-input-option segmented" + (selected === index ? " active" : "")}
              onClick={() => setSelected(index)}
              tabIndex="0"
            >
              {option.label}
            </div>
          ) : (
            <div className="radio-input-option" onClick={() => setSelected(index)} tabIndex="0">
              {props.optionLabels === "left" ? <p className="radio-input-option-label left">{option.label}</p> : null}
              <div className="radio-input-box-outer">
                <div className={"radio-input-box-inner" + (selected === index ? " active" : "")}/>
              </div>
              {props.optionLabels === "left" ? null : <p className="radio-input-option-label right">{option.label}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}