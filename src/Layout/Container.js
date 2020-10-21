import React from 'react';

export function Container(props){
  return(
    <div 
      className={
        "container" + 
        (props.raised ? " raised" : "") + 
        (props.bordered ? " bordered" : "") + 
        (props.margined ? " margined" : "") + 
        (props.clickable ? " clickable" : "") +
        (props.stretchX ? " stretch-x" : "")
      }
    >
      {props.header ? <h1 className={"container-header" + (props.inverted ? " inverted" : "")}>{props.header}</h1> : null}
      <div className={
        "container-contents" +
        (props.flex ? " flex" : "") +
        (props.column ? " column" : "") +
        (props.padded ? " padded" : "")
      }
      >
        {props.children}
      </div>
    </div>
  )
}