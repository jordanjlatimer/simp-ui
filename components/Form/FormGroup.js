import React from 'react';

export function FormGroup(props){
  return(
    <div className="form-group">
      {props.header ? <h1 className="form-group-header">{props.header}</h1> : null}
      {props.children}
    </div>
  )
}