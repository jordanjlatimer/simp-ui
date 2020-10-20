import React from 'react'

export default function DropdownItem(props){
  return(
    <div 
      className={"dropdown-item" + (props.selected ? " selected" : "")}
      onClick={props.callback}
      key={props.value} 
    >
      {props.label}
    </div>
  )
}