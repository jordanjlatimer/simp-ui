import React from 'react';

export function Button(props){
  return(
    <div className="button" onClick={props.onClick}>
      <p>{props.label}</p>
    </div>
  )
}