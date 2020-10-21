import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

export default function InputLabel(props){
  return(
    <div className="input-label">
      <p className="input-label-text">{props.label}</p>
      <FaExclamationCircle className={"input-label-icon" + (props.active ? " active" : "")}/>
    </div>
  )
}